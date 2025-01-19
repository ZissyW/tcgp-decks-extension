import "./popup.css"

function IndexPopup() {
  return (
    <div
      style={{
        width: 800,
        height: 600,
        position: "relative"
      }}>
      <div
        style={{
          background: "#27272a",
          width: "100%",
          height: 64,
          color: "white",
          padding: 16,
          display: "flex",
          alignItems: "center",
          boxSizing: "border-box"
        }}>
        {/* 访问 TCGP Deck 网站获取最佳体验（翻译文本） */}
        <div>
          <p
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: 12,
              margin: 0,
              marginBottom: 4
            }}>
            Visit TCGP Deck website for the best experience
          </p>
          <a
            href="https://tcgpdecks.com"
            style={{
              color: "white",
              fontSize: 14,
              textDecoration: "underline"
            }}
            target="_blank">
            https://tcgpdecks.com
          </a>
        </div>
        <div style={{ flexGrow: 1 }} />
        <a
          href="https://tcgpdecks.com/deck-builder"
          target="_blank"
          style={{
            color: "white",
            textDecoration: "none",
            background: "#da3831",
            padding: "8px 16px",
            fontSize: 16,
            borderRadius: 4,
            transition: "background-color 0.2s ease" // 添加过渡效果
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#ff4d44" // hover 时的颜色
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#da3831" // 恢复原来的颜色
          }}>
          Visit Website
        </a>
      </div>
      <meta name="theme-color" content="#27272a"></meta>
      <iframe
        src="https://tcgpdecks.com/deck-builder"
        title="Deck Builder for TCG Pokemon"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ width: "100%", height: 536, borderWidth: 0 }}
      />
    </div>
  )
}

export default IndexPopup
