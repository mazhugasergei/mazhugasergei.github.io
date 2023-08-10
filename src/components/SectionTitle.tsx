export default (props: { title: string, subtitle: string }) => {
  return (
    <div className="section-title">
      <h1>{ props.title }</h1>
      <p>{ props.subtitle }</p>
    </div>
  )
}