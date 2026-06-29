<template>
  <section class="rsvp-section">
    <div class="container">

      <div class="section-title text-center">
        <span class="sub-title">BEST WISHES</span>
        <div class="title-group">
          <div class="decorator-line"></div>
          <h2>Gửi Lời Chúc</h2>
          <div class="decorator-line"></div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="wish-form">
            <div class="mb-4">
              <input
                v-model="name"
                type="text"
                class="form-control"
                placeholder="Họ và tên của bạn..."
              >
            </div>

            <div class="mb-4">
              <textarea
                v-model="message"
                rows="5"
                class="form-control"
                placeholder="Nhập lời chúc ý nghĩa gửi đến cặp đôi..."
              ></textarea>
            </div>

            <button class="btn btn-submit" @click="submitWish" :disabled="loading">
              <span v-if="loading">⏳ Đang gửi...</span>
              <span v-else>✦ Gửi lời chúc hạnh phúc</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      message: "",
      loading: false,
    };
  },
  methods: {
    async submitWish() {
      if (this.loading) return;

      this.loading = true;

      try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbzWXgxFNZdg6ZdeSqpd3es7OEEKKRwQ0olvp-DCc7ELh9e6DMA5AvZz7iRkEQhxHPJDDQ/exec", {
          method: "POST",
          body: new URLSearchParams({
            name: this.name,
            message: this.message
          })
        });

        const text = await res.text();
        const clean = text.trim().toLowerCase();

        if (clean === "ok") {
          alert("Gửi thành công ❤️");
          this.name = "";
          this.message = "";
        } else {
          alert("Lỗi gửi dữ liệu");
        }

      } catch (err) {
        console.error(err);
        alert("Không gửi được!");
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.rsvp-section {
  padding: 80px 16px;
}

.section-title {
  margin-bottom: 50px;
}

.sub-title {
  display: block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 4px;
  color: #b38b4d;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.title-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.decorator-line {
  width: 50px;
  height: 1px;
  background: linear-gradient(to right, transparent, #b38b4d, transparent);
}

.section-title h2 {
  font-family: serif;
  font-size: 34px;
  font-weight: 600;
  color: #a23946;
  margin: 0;
  letter-spacing: 0.5px;
}

.wish-form {
  background: #fffdfa;
  border: 1px solid rgba(179, 139, 77, 0.25);
  padding: 45px 40px;
  border-radius: 16px;
  box-shadow: 0 15px 45px rgba(74, 59, 47, 0.05);
  box-sizing: border-box;
}

.form-control {
  width: 100%;
  border: 1px solid rgba(179, 139, 77, 0.3);
  background: #ffffff;
  border-radius: 8px;
  padding: 14px 18px;
  color: #4a3b2f;
  font-size: 14px;
  box-sizing: border-box;
  outline: none;
  transition: all 0.3s ease;
}

.form-control::placeholder {
  color: #a39689;
  opacity: 0.7;
}

.form-control:focus {
  border-color: #a23946;
  box-shadow: 0 0 0 3px rgba(162, 57, 70, 0.08);
  background: #fffdfa;
}

textarea.form-control {
  resize: none;
  line-height: 1.6;
}

.btn-submit {
  width: 100%;
  border: none;
  background: linear-gradient(135deg, #a23946, #802833);
  color: #fffdfa;
  border-radius: 50px;
  padding: 14px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(162, 57, 70, 0.2);
  transition: all 0.3s ease;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 22px rgba(162, 57, 70, 0.35);
  opacity: 0.95;
}

@media (max-width: 768px) {
  .rsvp-section {
    padding: 60px 16px;
  }

  .section-title {
    margin-bottom: 35px;
  }

  .section-title h2 {
    font-size: 26px;
  }

  .title-group {
    gap: 12px;
  }

  .decorator-line {
    width: 30px;
  }

  .wish-form {
    padding: 30px 20px;
  }

  .form-control {
    padding: 12px 14px;
    font-size: 13px;
  }

  .btn-submit {
    padding: 12px;
    font-size: 14px;
  }
}
</style>