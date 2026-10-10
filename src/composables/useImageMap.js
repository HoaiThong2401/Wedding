import { ref } from 'vue'

const imageMap = ref({})
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

/**
 * Chuyển Google Drive link sang link hiển thị trực tiếp tốc độ cao
 */
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

    // Đọc cache từ localStorage để hiển thị tức thì
    try {
      const cached = localStorage.getItem('wedding_images_cache')
      if (cached) {
        imageMap.value = JSON.parse(cached)
      }
    } catch (_) {}

    isLoading.value = true

    // Đọc toàn bộ bảng từ Google Sheet GViz API
    try {
      const gvizUrl = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}`
      const res = await fetch(gvizUrl)
      const text = await res.text()

      const jsonString = text.replace(/^[^{]*/, '').replace(/[^}]*$/, '')
      const gvizData = JSON.parse(jsonString)

      const rows = gvizData?.table?.rows || []
      const newMap = {}

      // TỰ ĐỘNG QUÉT TẤT CẢ CÁC CẶP CỘT (Cột 0-1 là A-B, Cột 3-4 là D-E, Cột 6-7 là G-H, v.v.)
      rows.forEach(r => {
        const cells = r.c || []
        for (let colIdx = 0; colIdx < cells.length - 1; colIdx++) {
          const idCell = cells[colIdx]
          const urlCell = cells[colIdx + 1]

          const idVal = idCell?.v != null ? String(idCell.v).trim() : ''
          const urlVal = urlCell?.v != null ? String(urlCell.v).trim() : ''

          // Nếu có ID và URL hợp lệ (bắt đầu bằng http hoặc là Google Drive ID)
          if (idVal && urlVal && (urlVal.startsWith('http') || urlVal.length >= 25)) {
            newMap[idVal] = formatDriveUrl(urlVal)
          }
        }
      })

      if (Object.keys(newMap).length > 0) {
        imageMap.value = { ...imageMap.value, ...newMap }
        isLoaded.value = true
        localStorage.setItem('wedding_images_cache', JSON.stringify(imageMap.value))
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
    const key = String(id).trim()
    return imageMap.value[key] || defaultFallbacks[key] || fallback || ''
  }

  return {
    imageMap,
    isLoaded,
    isLoading,
    fetchImages,
    getImage,
    formatDriveUrl
  }
}
