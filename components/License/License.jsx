export function License({ license }) {
  return (
    <div>
      <p><strong>license </strong>{ license.license }</p>
      <p><strong>status </strong>{ license.status }</p>
      <p><strong>status_date </strong>{ license.status_date }</p>
      <p><strong>driver_type </strong>{ license.driver_type }</p>
      <p><strong>license_type </strong>{ license.license_type }</p>
      <p><strong>name </strong>{ license.name }</p>
      <p><strong>sex </strong>{ license.sex }</p>
      <p><strong>city </strong>{ license.city }</p>
      <p><strong>state </strong>{ license.state }</p>
    </div>
  )
}
