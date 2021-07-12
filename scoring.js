const touchDowns = 6


function calculateQBScore(stats) {
  let passYards = stats.passing.yards / (25 * 1)
  let passTouchdown = stats.passing.touchdowns * touchDowns
  let passIntercepts = stats.passing.interceptions * -3
  let rushYards = stats.rushing.yards / (10 * 1)
  let rushTouchdowns = stats.rushing.touchdowns * touchDowns
  let rushFumbles = stats.rushing.fumbles * -3

  return passYards + passTouchdown + passIntercepts + rushYards + rushTouchdowns + rushFumbles
}

function calculateRBScore(stats) {
  let receiveReceptions = stats.receiving.receptions * 1
  let receiveYards = stats.receiving.yards / (10 * 1)
  let receiveTouchdowns = stats.receiving.touchdowns * touchDowns
  let receivefumbles = stats.receiving.fumbles * -3
  let rushYards = stats.rushing.yards / (10 * 1)
  let rushTouchdowns = stats.rushing.touchdowns * touchDowns
  let rushFumbles = stats.rushing.fumbles * -3
  let retKickYards = stats.return.kickreturn.returns * 1
  let retKickTDs = stats.return.kickreturn.touchdowns * touchDowns
  let retKickFumbles = stats.return.kickreturn.fumbles * -3
  let retPuntYards = stats.return.puntreturn.returns / (15 * 1)
  let retPuntTDs = stats.return.puntreturn.touchdowns * touchDowns
  let retPuntFumbles = stats.return.puntreturn.fumbles * -3

  // eslint-disable-next-line max-len
  return receiveReceptions + receiveYards + receiveTouchdowns + receivefumbles + rushYards + rushTouchdowns + rushFumbles + retKickYards + retKickTDs + retKickFumbles + retPuntYards + retPuntTDs + retPuntFumbles
}

function calculateWRScore(stats) {
  let receiveReceptions = stats.receiving.receptions * 1
  let receiveYards = stats.receiving.yards / (10 * 1)
  let receiveTouchdowns = stats.receiving.touchdowns * touchDowns
  let receivefumbles = stats.receiving.fumbles * -3
  let rushYards = stats.rushing.yards / (10 * 1)
  let rushTouchdowns = stats.rushing.touchdowns * touchDowns
  let rushFumbles = stats.rushing.fumbles * -3
  let returnKickYards = stats.return.kickreturn.yards / (15 * 1)
  let returnKickTDs = stats.return.kickreturn.touchdowns * touchDowns
  let returnKickFumbles = stats.return.kickreturn.fumbles * -3
  let returnPuntYards = stats.return.puntreturn.yards / (15 * 1)
  let returnPuntTDs = stats.return.puntreturn.touchdowns * touchDowns
  let returnPuntFumbles = stats.return.puntreturn.fumbles * -3

  // eslint-disable-next-line max-len
  return receiveReceptions + receiveYards + receiveTouchdowns + receivefumbles + rushYards + rushTouchdowns + rushFumbles + returnKickYards + returnKickTDs + returnKickFumbles + returnPuntYards + returnPuntTDs + returnPuntFumbles
}
function calculateTEScore(stats) {
  let receiveReceptions = stats.receiving.receptions * 1
  let receiveYards = stats.receiving.yards / (10 * 1)
  let receiveTouchdowns = stats.receiving.touchdowns * touchDowns
  let receivefumbles = stats.receiving.fumbles * -3

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
