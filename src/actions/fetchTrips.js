
export function fetchTrips() {
    fetch('http://localhost:3000/api/vi/trips')
    .then(resp => resp.json())
    .then(data => console.log(data))
}
