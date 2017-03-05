const prop = (o) => (key) => o[key]

function DnaTranscriber () {
  const complementaries = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }

  return {
    toRna: (nucleotides) =>
      nucleotides.split('')
                 .map(prop(complementaries))
                 .join('')
  }
}

module.exports = DnaTranscriber
