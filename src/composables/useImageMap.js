import { ref } from 'vue'

const imageMap = ref({})
const storyListFromSheet = ref([])
const isLoaded = ref(false)
const isLoading = ref(false)

// ID Google Sheet
export const SPREADSHEET_ID = '1FER-AL6e9l0bRSseMdkt_jRU-dLRQaip-fEuupxFYaM'
export const SHEET_NAME = 'Images'

// URL Google Apps Script Web App (dự phòng)
export const SCRIPT_IMAGE_URL = 'https://script.google.com/macros/s/AKfycbzWXgxFNZdg6ZdeSqpd3es7OEEKKRwQ0olvp-DCc7ELh9e6DMA5AvZz7iRkEQhxHPJDDQ/exec'

// Ảnh fallback mặc định nếu chưa có ID trên Google Sheet
const defaultFallbacks = {
  '1': 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80',
  '2': 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=80',
  '3': 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80',
  '4': 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&auto=format&fit=crop&q=80',
  '5': 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&auto=format&fit=crop&q=80',
  '6': 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop&q=80',
  '7': 'https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?w=800&auto=format&fit=crop&q=80',
  '8': 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop&q=80',
  '9': 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&auto=format&fit=crop&q=80',
  'cover': '/images/style_cover.jpg',
  'groom': '/images/avatar_nam.jpg',
  'bride': '/images/avatar_nu.jpg',
  'story_1': 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&auto=format&fit=crop&q=80',
  'story_2': 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&auto=format&fit=crop&q=80',
  'story_3': 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80'
}

export function formatDate(val) {
  if (!val) return ''
  const str = String(val).trim()

  const gvizMatch = str.match(/Date\((\d+),\s*(\d+),\s*(\d+)/i)
  if (gvizMatch) {
    const y = gvizMatch[1]
    const m = String(Number(gvizMatch[2]) + 1).padStart(2, '0')
    const d = String(gvizMatch[3]).padStart(2, '0')
    return `${d} . ${m} . ${y}`
  }

  const dmyMatch = str.match(/^(\d{1,2})\s*[\.\/\-]\s*(\d{1,2})\s*[\.\/\-]\s*(\d{4})$/)
  if (dmyMatch) {
    const d = String(dmyMatch[1]).padStart(2, '0')
    const m = String(dmyMatch[2]).padStart(2, '0')
    const y = dmyMatch[3]
    return `${d} . ${m} . ${y}`
  }

  const ymdMatch = str.match(/^(\d{4})[\.\/\-](\d{1,2})[\.\/\-](\d{1,2})$/)
  if (ymdMatch) {
    const y = ymdMatch[1]
    const m = String(ymdMatch[2]).padStart(2, '0')
    const d = String(ymdMatch[3]).padStart(2, '0')
    return `${d} . ${m} . ${y}`
  }

  return str
}

export function formatDriveUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return ''
  const trimmed = rawUrl.trim()

  if (trimmed.startsWith('http') && !trimmed.includes('drive.google.com') && !trimmed.includes('docs.google.com')) {
    return trimmed
  }

  const match = trimmed.match(/[-\w]{25,}/)
  if (match) {
    const fileId = match[0]
    return `https://lh3.googleusercontent.com/d/${fileId}`
  }

  return trimmed
}

export function useImageMap() {
  const fetchImages = async () => {
    if (isLoaded.value || isLoading.value) return

    try {
      const cached = localStorage.getItem('wedding_images_cache')
      if (cached) {
        imageMap.value = JSON.parse(cached)
      }
      const cachedStories = localStorage.getItem('wedding_stories_cache')
      if (cachedStories) {
        storyListFromSheet.value = JSON.parse(cachedStories)
      }
    } catch (_) { }

    isLoading.value = true

    try {
      const gvizUrl = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}`
      const res = await fetch(gvizUrl)
      const text = await res.text()

      const jsonString = text.replace(/^[^{]*/, '').replace(/[^}]*$/, '')
      const gvizData = JSON.parse(jsonString)

      const rows = gvizData?.table?.rows || []
      const cols = gvizData?.table?.cols || []
      const newMap = {}

      rows.forEach(r => {
        const cells = r.c || []
        for (let colIdx = 0; colIdx < cells.length - 1; colIdx++) {
          const idCell = cells[colIdx]
          const urlCell = cells[colIdx + 1]

          const idVal = idCell?.v != null ? String(idCell.v).trim() : ''
          const urlVal = urlCell?.v != null ? String(urlCell.v).trim() : ''

          if (idVal && urlVal) {
            if (urlVal.startsWith('http') || urlVal.length >= 25) {
              newMap[idVal] = formatDriveUrl(urlVal)
            } else {
              newMap[idVal] = urlVal
            }
          }
        }
      })

      let storyColIdx = cols.findIndex(c => c && /story\s*id/i.test(c.label || ''))
      if (storyColIdx === -1) {
        for (const r of rows) {
          const cells = r.c || []
          for (let i = 0; i < cells.length; i++) {
            if (/^story[-_]?\d+/i.test(cells[i]?.v || '')) {
              storyColIdx = i
              break
            }
          }
          if (storyColIdx !== -1) break
        }
      }

      if (storyColIdx !== -1) {
        const storyUrlColIdx = storyColIdx + 1
        let dateColIdx = cols.findIndex(c => c && /(date|ng[aà]y)/i.test(c.label || ''))
        let chapterColIdx = cols.findIndex(c => c && /(chapter|ch[uư][oơ]ng)/i.test(c.label || ''))
        let titleColIdx = cols.findIndex(c => c && /(title|ti[eê]u\s*đ[eề])/i.test(c.label || ''))
        let descColIdx = cols.findIndex(c => c && /(desc|m[oô]\s*t[aả]|n[oộ]i\s*dung)/i.test(c.label || ''))
        let quoteColIdx = cols.findIndex(c => c && /(quote|tr[ií]ch\s*d[aẫ]n)/i.test(c.label || ''))

        if (dateColIdx === -1) dateColIdx = storyUrlColIdx + 1
        if (chapterColIdx === -1) chapterColIdx = storyUrlColIdx + 2
        if (titleColIdx === -1) titleColIdx = storyUrlColIdx + 3
        if (descColIdx === -1) descColIdx = storyUrlColIdx + 4
        if (quoteColIdx === -1) quoteColIdx = storyUrlColIdx + 5

        const parsedStories = []
        rows.forEach(r => {
          const cells = r.c || []
          const idCellVal = cells[storyColIdx]?.v != null ? String(cells[storyColIdx].v).trim() : ''
          if (/^story[-_]?\d+/i.test(idCellVal)) {
            const urlVal = cells[storyUrlColIdx]?.v != null ? String(cells[storyUrlColIdx].v).trim() : ''
            const rawDateCell = cells[dateColIdx]
            const rawDate = rawDateCell?.f != null ? String(rawDateCell.f).trim() : (rawDateCell?.v != null ? String(rawDateCell.v).trim() : '')
            const dateVal = formatDate(rawDate)
            const chapterVal = cells[chapterColIdx]?.v != null ? String(cells[chapterColIdx].v).trim() : ''
            const titleVal = cells[titleColIdx]?.v != null ? String(cells[titleColIdx].v).trim() : ''
            const descVal = cells[descColIdx]?.v != null ? String(cells[descColIdx].v).trim() : ''
            const quoteVal = cells[quoteColIdx]?.v != null ? String(cells[quoteColIdx].v).trim() : ''

            const item = {
              key: idCellVal,
              url: formatDriveUrl(urlVal),
              date: dateVal,
              chapter: chapterVal,
              title: titleVal,
              desc: descVal,
              quote: quoteVal
            }
            parsedStories.push(item)

            if (urlVal) newMap[idCellVal] = formatDriveUrl(urlVal)
            if (dateVal) newMap[idCellVal + '_date'] = dateVal
            if (chapterVal) newMap[idCellVal + '_chapter'] = chapterVal
            if (titleVal) newMap[idCellVal + '_title'] = titleVal
            if (descVal) newMap[idCellVal + '_desc'] = descVal
            if (quoteVal) newMap[idCellVal + '_quote'] = quoteVal
          }
        })

        if (parsedStories.length > 0) {
          storyListFromSheet.value = parsedStories
          localStorage.setItem('wedding_stories_cache', JSON.stringify(parsedStories))
        }
      }

      if (Object.keys(newMap).length > 0) {
        imageMap.value = newMap
        isLoaded.value = true
        localStorage.setItem('wedding_images_cache', JSON.stringify(newMap))
        isLoading.value = false
        return
      }
    } catch (gvizErr) {
      console.warn('Lỗi đọc trực tiếp GViz, thử phương thức Apps Script:', gvizErr)
    } finally {
      isLoading.value = false
    }
  }

  const getImage = (id, fallback = '') => {
    if (!id) return fallback || ''
    const key = String(id).trim()
    const altKey = key.includes('_') ? key.replace('_', '') : key.replace(/(\d+)$/, '_$1')
    return (
      imageMap.value[key] ||
      imageMap.value[altKey] ||
      defaultFallbacks[key] ||
      defaultFallbacks[altKey] ||
      fallback ||
      ''
    )
  }

  return {
    imageMap,
    storyListFromSheet,
    isLoaded,
    isLoading,
    fetchImages,
    getImage,
    formatDate,
    formatDriveUrl
  }
}
