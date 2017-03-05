module.exports = function SpaceAge (years) {
  const EARTH_SECONDS = 31557600
  const round = (n) => Math.round(n * 100) / 100

  const onEarth = () => round(years / EARTH_SECONDS)
  const onMercury = () => round(years / EARTH_SECONDS / 0.2408467)
  const onVenus = () => round(years / EARTH_SECONDS / 0.61519726)
  const onMars = () => round(years / EARTH_SECONDS / 1.8808158)
  const onJupiter = () => round(years / EARTH_SECONDS / 11.862615)
  const onSaturn = () => round(years / EARTH_SECONDS / 29.447498)
  const onUranus = () => round(years / EARTH_SECONDS / 84.016846)
  const onNeptune = () => round(years / EARTH_SECONDS / 164.79132)

  return { onEarth
         , onMercury
         , onVenus
         , onMars
         , onJupiter
         , onSaturn
         , onUranus
         , onNeptune
         , seconds: years
         }
}
