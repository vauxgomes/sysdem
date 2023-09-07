export default function BreadCrumbs({ path }) {
  return (
    <nav aria-label="breadcrumb mb-5">
      <ol className="breadcrumb">
        {path &&
          path.split('/').map((item, key) => (
            <li key={key} className="small text-secondary breadcrumb-item">
              {item}
            </li>
          ))}
      </ol>
    </nav>
  )
}
