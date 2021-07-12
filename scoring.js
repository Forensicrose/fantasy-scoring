const touchDowns = 6
const fumbles = -3
const rushingYards = (10 * 1)
const receivingYards = (10 * 1)
const receivingReceptions = 1
const returns = (15 * 1)
const passingYards = (25 * 1)
const passingInterceptions = -3


function calculateQBScore(stats) {
  let passYards = stats.passing.yards / passingYards
  let passTouchdown = stats.passing.touchdowns * touchDowns
  let passIntercepts = stats.passing.interceptions * passingInterceptions
  let rushYards = stats.rushing.yards / rushingYards
  let rushTouchdowns = stats.rushing.touchdowns * touchDowns
  let rushFumbles = stats.rushing.fumbles * fumbles

  return passYards + passTouchdown + passIntercepts + rushYards + rushTouchdowns + rushFumbles
}

function calculateRBScore(stats) {
  let receiveReceptions = stats.receiving.receptions * receivingReceptions
  let receiveYards = stats.receiving.yards / receivingYards
  let receiveTouchdowns = stats.receiving.touchdowns * touchDowns
  let receivefumbles = stats.receiving.fumbles * fumbles
  let rushYards = stats.rushing.yards / rushingYards
  let rushTouchdowns = stats.rushing.touchdowns * touchDowns
  let rushFumbles = stats.rushing.fumbles * fumbles
  let retKickYards = stats.return.kickreturn.returns * returns
  let retKickTDs = stats.return.kickreturn.touchdowns * touchDowns
  let returnKickFumbles = stats.return.kickreturn.fumbles * fumbles
  let returnPuntYards = stats.return.puntreturn.returns / returns
  let returnPuntTouchdowns = stats.return.puntreturn.touchdowns * touchDowns
  let returnPuntFumbles = stats.return.puntreturn.fumbles * fumbles

  // eslint-disable-next-line max-len
  return receiveReceptions + receiveYards + receiveTouchdowns + receivefumbles + rushYards + rushTouchdowns + rushFumbles + retKickYards + retKickTDs + returnKickFumbles + returnPuntYards + returnPuntTouchdowns + returnPuntFumbles
}

function calculateWRScore(stats) {
  let receiveReceptions = stats.receiving.receptions * receivingReceptions
  let receiveYards = stats.receiving.yards / receivingYards
  let receiveTouchdowns = stats.receiving.touchdowns * touchDowns
  let receivefumbles = stats.receiving.fumbles * fumbles
  let rushYards = stats.rushing.yards / rushingYards
  let rushTouchdowns = stats.rushing.touchdowns * touchDowns
  let rushFumbles = stats.rushing.fumbles * fumbles
  let returnKickYards = stats.return.kickreturn.yards / returns
  let returnKickTDs = stats.return.kickreturn.touchdowns * touchDowns
  let returnKickFumbles = stats.return.kickreturn.fumbles * fumbles
  let returnPuntYards = stats.return.puntreturn.yards / returns
  let returnPuntTDs = stats.return.puntreturn.touchdowns * touchDowns
  let returnPuntFumbles = stats.return.puntreturn.fumbles * fumbles

  // eslint-disable-next-line max-len
  return receiveReceptions + receiveYards + receiveTouchdowns + receivefumbles + rushYards + rushTouchdowns + rushFumbles + returnKickYards + returnKickTDs + returnKickFumbles + returnPuntYards + returnPuntTDs + returnPuntFumbles
}
function calculateTEScore(stats) {
  let receiveReceptions = stats.receiving.receptions * receivingReceptions
  let receiveYards = stats.receiving.yards / receivingYards
  let receiveTouchdowns = stats.receiving.touchdowns * touchDowns
  let receivefumbles = stats.receiving.fumbles * fumbles

  return receiveReceptions + receiveYards + receiveTouchdowns + receivefumbles
}

function calculateScore(player) {
  let score = 0

  switch (player.position) {
    case ('QB'):
      score = calculateQBScore(player.stats)
      break
    case ('RB'):
      score = calculateRBScore(player.stats)
      break
    case ('WR'):
      score = calculateWRScore(player.stats)
      break
    case ('TE'):
      score = calculateTEScore(player.stats)
      break
    default:
      score = 0
  }

  return score
}


module.exports = calculateScore
