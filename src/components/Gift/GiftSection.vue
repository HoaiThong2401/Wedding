<template>
  <section class="gift-section">
    <div class="container">

      <div class="title">
        <h2>Phong Bao Mừng Cưới</h2>
        <p>Nhấn vào phong bao để mở QR</p>
      </div>

      <button class="envelope-btn" @click="open = true">

        <div class="coin coin-1"></div>
        <div class="coin coin-2"></div>
        <div class="coin coin-3"></div>
        <div class="coin coin-4"></div>
        <div class="coin coin-5"></div>
        <div class="coin coin-6"></div>
        <div class="coin coin-7"></div>
        <div class="coin coin-8"></div>
        <div class="coin coin-9"></div>
        <div class="coin coin-10"></div>

        <span class="spark s1">✦</span>
        <span class="spark s2">✦</span>
        <span class="spark s3">✦</span>

        <div class="envelope">
          <div class="corner tl"></div>
          <div class="corner tr"></div>
          <div class="corner bl"></div>
          <div class="corner br"></div>

          <div class="seal">囍</div>
        </div>

        <br>
        <p class="hint">Nhấn để mở</p>

      </button>

      <div v-if="open" class="modal" @click.self="open = false">

        <div class="modal-box">

          <div class="modal-header">
            <p></p>
            <h3>QR Mừng Cưới</h3>
            <button class="close-icon" @click="open = false">✕</button>
          </div>

          <div class="modal-body">
            <img src="/images/bank.jpg" alt="QR" />

            <div class="actions">
              <button class="btn download" @click="downloadQR">
                Tải QR
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"

const open = ref(false)

const downloadQR = () => {
  const link = document.createElement("a")
  link.href = "/images/bank.jpg"
  link.download = "qr-mung-cuoi.jpg"
  link.click()
}
</script>

<style scoped>

.gift-section{
  padding-bottom:80px;
  text-align:center;
  font-family:"Times New Roman", serif;
}

.title h2{
  font-size:28px;
  color:#30530f;
  margin-bottom:6px;
}

.title p{
  font-size:14px;
  color:#666;
}

.envelope-btn{
  width:220px;
  height:280px;
  position:relative;
  margin:40px auto;
  border:none;
  background:transparent;
  cursor:pointer;
  overflow:visible;
}

.envelope{
  width:140px;
  height:200px;
  margin:auto;
  position:relative;
  border-radius:14px;
  background:#b3122d;
  box-shadow:0 10px 25px rgba(0,0,0,.25);
  animation:shake 2.8s ease-in-out infinite;
}

.seal{
  width:60px;
  height:60px;
  border-radius:50%;
  background:gold;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:bold;
  font-size:26px;
  color:#a70d0d;
  border:3px solid #fff3c4;
}

.corner{
  position:absolute;
  width:22px;
  height:22px;
}

.tl{top:8px;left:8px;border-top:3px solid #ffd166;border-left:3px solid #ffd166;}
.tr{top:8px;right:8px;border-top:3px solid #ffd166;border-right:3px solid #ffd166;}
.bl{bottom:8px;left:8px;border-bottom:3px solid #ffd166;border-left:3px solid #ffd166;}
.br{bottom:8px;right:8px;border-bottom:3px solid #ffd166;border-right:3px solid #ffd166;}

.coin{
  position:absolute;
  border-radius:50%;
  background:radial-gradient(circle,#fbbf24,#d97706);
  border:2px solid #f59e0b;
  box-shadow:0 2px 6px rgba(0,0,0,.25);
  opacity:0;
  animation:floatWide 3.4s linear infinite;
}

.coin-1{width:26px;height:26px;left:-15%;top:75%;animation-delay:0s}
.coin-2{width:18px;height:18px;left:-5%;top:85%;animation-delay:.3s}
.coin-3{width:22px;height:22px;left:10%;top:90%;animation-delay:.6s}
.coin-4{width:20px;height:20px;left:25%;top:92%;animation-delay:.9s}
.coin-5{width:24px;height:24px;left:45%;top:88%;animation-delay:1.2s}
.coin-6{width:18px;height:18px;left:60%;top:92%;animation-delay:1.5s}
.coin-7{width:22px;height:22px;left:75%;top:88%;animation-delay:1.8s}
.coin-8{width:20px;height:20px;left:90%;top:85%;animation-delay:2.1s}
.coin-9{width:16px;height:16px;left:105%;top:80%;animation-delay:2.4s}
.coin-10{width:28px;height:28px;left:50%;top:95%;animation-delay:2.7s}

@keyframes floatWide {
  0%{transform:translateY(0) scale(.8);opacity:0}
  10%{opacity:1}
  50%{transform:translateY(-130px) translateX(-25px) scale(1)}
  100%{transform:translateY(-280px) translateX(40px) scale(1.1);opacity:0}
}

@keyframes shake {
  0%{transform:rotate(0deg)}
  25%{transform:rotate(1deg)}
  50%{transform:rotate(-1deg)}
  75%{transform:rotate(1deg)}
  100%{transform:rotate(0deg)}
}

.hint{
  position:absolute;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  font-size:12px;
  color:#30530f;
}

/* MODAL */
.modal{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.65);
  display:flex;
  align-items:center;
  justify-content:center;
  backdrop-filter: blur(6px);
}

.modal-box{
  width:340px;
  border-radius:18px;
  overflow:hidden;
  background:linear-gradient(145deg,#fff7f2,#ffffff);
  box-shadow:0 20px 60px rgba(0,0,0,.25);
}

.modal-header{
  background:linear-gradient(135deg,#b3122d,#fb4f4f);
  color:#fff;
  padding:12px 16px;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.modal-header h3{
  font-size:16px;
  margin:0;
}

.close-icon{
  border:none;
  background:rgba(255,255,255,.2);
  width:28px;
  height:28px;
  border-radius:50%;
  cursor:pointer;
  color:#fff;
}

.close-icon:hover{
  background:rgba(255,255,255,.35);
}

.modal-body{
  padding:18px;
  display:flex;
  flex-direction:column;
  align-items:center;
}

img{
  width:220px;
  height:220px;
  object-fit:cover;
  border-radius:14px;
  margin:10px 0 18px;
  border:4px solid #fff;
  box-shadow:0 10px 25px rgba(0,0,0,.15);
}

.actions{
  display:flex;
  gap:10px;
}

.btn{
  padding:8px 14px;
  border:none;
  border-radius:999px;
  cursor:pointer;
  font-size:14px;
  transition:.2s;
}

.download{
  background:#16a34a;
  color:#fff;
}

.download:hover{
  background:#15803d;
  transform:translateY(-1px);
}

.close{
  background:#e5e5e5;
}

.close:hover{
  background:#d4d4d4;
}
</style>