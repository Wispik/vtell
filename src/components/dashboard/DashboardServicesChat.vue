<template>
  <div class="chat">
    <div class="chat-top">
      <img src="@/assets/images/avatar.png" class="chat-top__avatar">
      <div class="chat-top__name">
        Suporte ADMIN
        <span>#CU6798H</span>
      </div>
      <div class="chat-top__buttons">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill="#E5E5E5"/>
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5Z" fill="#E5E5E5"/>
        </svg>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z" fill="#E5E5E5"/>
        </svg>
      </div>
    </div>
    <div class="chat-content">
      <div class="chat-message">
        <img src="@/assets/images/avatar2.png" class="chat-message__avatar">
        <div class="chat-message__block">
          <div class="chat-message__text">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
          <div class="chat-message__time">8:00 PM</div>
        </div>
      </div>
      <div class="chat-message">
        <img src="@/assets/images/avatar.png" class="chat-message__avatar">
        <div class="chat-message__block">
          <div class="chat-message__text">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
          <div class="chat-message__time">8:00 PM</div>
        </div>
      </div>
      <div class="chat-message">
        <img src="@/assets/images/avatar2.png" class="chat-message__avatar">
        <div class="chat-message__block">
          <div class="chat-message__text">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
          <div class="chat-message__time">8:00 PM</div>
        </div>
      </div>
      <div class="chat-message">
        <img src="@/assets/images/avatar.png" class="chat-message__avatar">
        <div class="chat-message__block">
          <div class="chat-message__text">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
          <div class="chat-message__time">8:00 PM</div>
        </div>
      </div>
    </div>
    <div class="chat-bottom">
      <input type="text" class="chat-bottom__input" placeholder="Digite a mensagem">
      <svg class="mla" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#E63739"/>
        <path d="M10.01 29L31 20L10.01 11L10 18L25 20L10 22L10.01 29Z" fill="#302F2F"/>
      </svg>
      <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 5V16.5C9.5 18.71 7.71 20.5 5.5 20.5C3.29 20.5 1.5 18.71 1.5 16.5V4C1.5 2.62 2.62 1.5 4 1.5C5.38 1.5 6.5 2.62 6.5 4V14.5C6.5 15.05 6.05 15.5 5.5 15.5C4.95 15.5 4.5 15.05 4.5 14.5V5H3V14.5C3 15.88 4.12 17 5.5 17C6.88 17 8 15.88 8 14.5V4C8 1.79 6.21 0 4 0C1.79 0 0 1.79 0 4V16.5C0 19.54 2.46 22 5.5 22C8.54 22 11 19.54 11 16.5V5H9.5Z" fill="#E63739"/>
      </svg>
      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.00016 11.1698L1.83016 6.99984L0.410156 8.40984L6.00016 13.9998L18.0002 1.99984L16.5902 0.589844L6.00016 11.1698Z" fill="#E63739"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.chat {
  background: $bg-color;
  border: 1px solid $bg3-color;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 780px;
}
.chat-top {
  padding: 32px 23px 32px 32px;
  border-bottom: 1px solid $bg3-color;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 23px;

  @media (max-width: 980px) {
    flex-wrap: wrap;
  }
}
.chat-top__avatar {
  border-radius: 64px;
  width: 40px;
  height: 40px;
}
.chat-top__name {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: $text3-color;

  @media (max-width: 980px) {
    flex: 1;
  }

  & > span {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: $text3-color;
  }
}
.chat-top__buttons {
  margin-left: auto;
  display: flex;
  gap: 50px;
  align-items: center;

  & > svg {
    cursor: pointer;

    &:hover path{
      fill: darken($text3-color , 40);
    }
  }

  @media (max-width: 980px) {
    margin-left: 64px;
    gap: 26px;
  }
}
.chat-content {
  flex: 1;
  padding: 36px 16px 16px 26px;
  display: flex;
  flex-direction: column;
  gap: 29px;
}
.chat-message {
  display: flex;
  flex-flow: row nowrap;
  gap: 30px;
  align-items: flex-start;

  &:nth-child(even) {
    margin-left: auto;
    flex-direction: row-reverse;
  }
}
.chat-message__avatar {
  border-radius: 64px;
  width: 30px;
  height: 30px;
}
.chat-message__block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.chat-message__text {
  background: #302F2F;
  border-radius: 10px;
  max-width: 360px;
  width: inherit;
  padding: 8px 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: $text4-color;
}
.chat-message__time {
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: $text3-color;
}
.chat-bottom {
  background: $bg3-color;
  border: 1px solid #444444;
  border-radius: 10px;
  margin: 0 35px 22px 35px;
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
  align-items: center;
  padding: 10px 10px 10px 26px;
  
  & > svg {
    cursor: pointer;
  }
}
.chat-bottom__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: "PF BeauSans Pro";
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: $text4-color;

  &::placeholder {
    font-family: "PF BeauSans Pro";
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: $text4-color;
  }

  @media (max-width: 980px) {
    width: 100px;
  }
}
.mla {
  margin-left: auto;
}
</style>