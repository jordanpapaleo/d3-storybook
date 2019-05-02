import * as d3 from 'd3'

export default function (svg, width, height) {
  let n = 60
  let curr = 0
  const seq = [curr]

  for (let i = 1; i < n; i++) {
    let next = curr - i

    if (next < 0 || seq.includes(next)) {
      curr = curr + i
      seq.push(curr)
    } else {
      curr = next
      seq.push(next)
    }
  }

  console.log('seq', seq)

  let sign = 1
  const data = new Array(n).fill('').map((meh, i) => {
    sign = -sign

    return {
      dir: Math.sign(seq[i + 1] - seq[i]),
      center: (seq[i] + seq[i + 1]) / 2,
      radius: Math.abs(seq[i] - seq[i + 1]) / 2,
      sign,
    }
  })

  console.log('data', data)

  var g = svg.append('g')

  const x = d3.scaleLinear()
    .range([0, width])
    .domain([0, d3.max(seq)])

  const arc = d3.arc()
    .innerRadius((d) => x(d.radius))
    .outerRadius((d) => x(d.radius))
    .endAngle((d) => d.dir * d.sign * (Math.PI / 2) + ((d.sign - 1) * Math.PI) / 2)
    .startAngle((d) => -d.dir * d.sign * (Math.PI / 2) + ((d.sign - 1) * Math.PI) / 2)

  const DURATION = 100

  g.selectAll('path')
    .data(data)
    .enter()
    .append('path')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', '2')
    .attr('d', arc)
    .attr('transform', (d) => `translate(${x(d.center)}, 240)`)
    .attr('stroke-dasharray', function (d) {
      const totalLength = this.getTotalLength()
      return `${totalLength}, ${totalLength}`
    })
    .attr('stroke-dashoffset', function (d) {
      return this.getTotalLength()
    })
    .transition()
    .delay((d, i) => i * DURATION)
    .duration(DURATION * 2)
    .ease(d3.easeLinear)
    .attr('stroke-dashoffset', 0)
}
