export default function HeaderTitle({ title, subtitle, children }) {
  return (
    <header className="mb-5 d-flex align-items-center justify-content-between">
      <div>
        <h2 className="fw-bold mb-0">{title}</h2>
        {subtitle && <p className="text-secondary mb-0">{subtitle}</p>}
      </div>
      {children}
    </header>
  )
}
