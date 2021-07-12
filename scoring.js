const touchDownsAll = 6
const fumblesAll = -3
const rushingYards = (10 * 1)
const receivingYards = (10 * 1)
const receivingReceptions = 1
const returnsAll = (15 * 1)
const passingYards = (25 * 1)
const passingInterceptions = -3


function calculateQBScore(stats) {
  let passYards = stats.passing.yards / passingYards
  let passTouchdown = stats.passing.touchdowns * touchDownsAll
  let passIntercepts = stats.passing.interceptions * passingInterceptions
  let rushYards = stats.rushing.yards / rushingYards
  let rushTouchdowns = stats.rushing.touchdowns * touchDownsAll
  let rushFumbles = stats.rushing.fumbles * fumblesAll

  return passYards + passTouchdown + passIntercepts + rushYards + rushTouchdowns + rushFumbles
}

function calculateRBScore(stats) {
  let rushYards = stats.rushing.yards / rushingYards
  let rushTouchdowns = stats.rushing.touchdowns * touchDownsAll
  let rushFumbles = stats.rushing.fumbles * fumblesAll
  let receiveReceptions = stats.receiving.receptions * receivingReceptions
  let receiveYards = stats.receiving.yards / receivingYards
  let receiveTouchdowns = stats.receiving.touchdowns * touchDownsAll
  let receivefumbles = stats.receiving.fumbles * fumblesAll
  let returnKickYards = stats.return.kickreturn.returns * returnsAll
  let returnKickTouchdowns = stats.return.kickreturn.touchdowns * touchDownsAll
  let returnKickFumbles = stats.return.kickreturn.fumbles * fumblesAll
  let returnPuntYards = stats.return.puntreturn.returns / returnsAll
  let returnPuntTouchdowns = stats.return.puntreturn.touchdowns * touchDownsAll
  let returnPuntFumbles = stats.return.puntreturn.fumbles * fumblesAll

  // eslint-disable-next-line max-len
  return receiveReceptions + receiveYards + receiveTouchdowns + receivefumbles + rushYards + rushTouchdowns + rushFumbles + returnKickYards + returnKickTouchdowns + returnKickFumbles + returnPuntYards + returnPuntTouchdowns + returnPuntFumbles
}

function calculateWRScore(stats) {
  let receiveReceptions = stats.receiving.receptions * receivingReceptions
  let receiveYards = stats.receiving.yards / receivingYards
  let receiveTouchdowns = stats.receiving.touchdowns * touchDownsAll
  let receivefumbles = stats.receiving.fumbles * fumblesAll
  let rushYards = stats.rushing.yards / rushingYards
  let rushTouchdowns = stats.rushing.touchdowns * touchDownsAll
  let rushFumbles = stats.rushing.fumbles * fumblesAll
  let returnKickYards = stats.return.kickreturn.yards / returnsAll
  let returnKickTDs = stats.return.kickreturn.touchdowns * touchDownsAll
  let returnKickFumbles = stats.return.kickreturn.fumbles * fumblesAll
  let returnPuntYards = stats.return.puntreturn.yards / returnsAll
  let returnPuntTDs = stats.return.puntreturn.touchdowns * touchDownsAll
  let returnPuntFumbles = stats.return.puntreturn.fumbles * fumblesAll

  // eslint-disable-next-line max-len
  return receiveReceptions + receiveYards + receiveTouchdowns + receivefumbles + rushYards + rushTouchdowns + rushFumbles + returnKickYards + returnKickTDs + returnKickFumbles + returnPuntYards + returnPuntTDs + returnPuntFumbles
}
function calculateTEScore(stats) {
  let receiveReceptions = stats.receiving.receptions * receivingReceptions
  let receiveYards = stats.receiving.yards / receivingYards
  let receiveTouchdowns = stats.receiving.touchdowns * touchDownsAll
  let receivefumbles = stats.receiving.fumbles * fumblesAll

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
