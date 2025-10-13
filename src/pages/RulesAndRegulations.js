import "./TermsConditions.css"

const RulesAndRegulations = () => {
  return (
    <div className="terms-conditions-page">
      <div className="page-header">
        <h1>Rules and Regulations </h1>
      </div>

      <div className="content-container">
        <div className="terms-content">
            <h2>Rules & Regulations for Saara Creative Pvt Ltd - Under Brand Name <span className="footer-logo-text">“MyChessCircle_UK”</span> – India's Chess E-Sports Platform</h2>

            <h3>1. General Rules & Gameplay</h3>
            <p>Our MyChessCircle_UK – India's Chess E-Sports Platform follows standard chess rules with an added points system for fair competition and an integrated timer-based system to enhance the gameplay experience.</p>

            <p>1.1 Objective of the Game</p>
            <p>The goal of the game is to checkmate your opponent’s king. If the game is not decided by checkmate, the winner will be determined based on the points system if the timer runs out for either player.</p>
            <p>1.2 Game Mode</p>
            <ul>
              <li>•	One-to-One Chess Match: Play against another player in a timed game.</li>
              <li>•	E-sports Chess Championship Mode: Compete in daily, weekly, and monthly Tournaments.</li>
              <li>•	Practice Mode: Play unranked matches to improve your skills.</li>
            </ul>

            <h3>2. Chess Moves & Gameplay Rules</h3>
            <p>2.1 Standard Chess Rules</p>
            <ul>
              <li>•	Each player starts with 16 pieces (1 King, 1 Queen, 2 Rooks, 2 Bishops, 2 Knights, and 8 Pawns).</li>
              <li>•	The game is played on an 8×8 board with alternating black and white squares.</li>
              <li>•	Pieces move as per traditional chess rules: 
                <ul>
                  <li>•	Pawn: Moves forward one square (or two squares on its first move), captures diagonally.</li>
                  <li>•	Rook: Moves any number of squares in a straight line (vertically/horizontally).</li>
                  <li>•	Knight: Moves in an ‘L’ shape (two squares in one direction, then one perpendicular).</li>
                  <li>•	Bishop: Moves diagonally any number of squares.</li>
                  <li>•	Queen: Moves like a Rook and Bishop combined.</li>
                  <li>•	King: Moves one square in any direction.</li>
                </ul>
              </li>
              <li>•	Castling, En Passant, and Pawn Promotion rules apply as per FIDE chess regulations.</li>
            </ul>

            <p>2.2 Our online chess gaming platform follows the official FIDE chess regulations, ensuring a fair and competitive environment for all players. Below are the key rules governing gameplay:</p>
            <ul>
              <li>1. Standard Chess Moves & Rules</li>
              <ul> 
                <li>•	All standard chess moves, including King, Queen, Rook, Bishop, Knight, and Pawn movements, are as per FIDE regulations.</li>
                <li>•	Special moves such as Castling, En Passant, and Pawn Promotion are implemented according to FIDE rules:</li>
                <ul>
                  <li>•	Castling: A move involving the King and Rook, permitted only if neither piece has moved before, there are no pieces in between, and the King is not in check or moving through check.</li>
                  <li>•	En Passant: A special pawn capture that occurs when a pawn moves two squares forward from its starting position, and an adjacent opponent's pawn can capture it as if it had moved only one square.</li>
                  <li>•	Pawn Promotion: When a pawn reaches the opponent’s last rank, it must be promoted to a Queen, Rook, Bishop, or Knight, based on the player's choice.</li>
                </ul>
              </ul>
              <li>2. Timer & Timeouts</li>
                <ul>
                  <li>•	Each player will have 10 minutes to complete their moves.</li>
                  <li>•	If a player runs out of time, the winner will be decided based on the points system (explained below).</li>
                </ul>
              <li>3. Points System</li>
              <ul>
                <li>•	Pawn: 1 point</li>
                <li>•	Knight: 3 points</li>
                <li>•	Bishop: 3 points</li>
                <li>•	Rook: 5 points</li>
                <li>•	Queen: 9 points</li>
                <li>•	King: No point value (Checkmate ends the game)</li>
              </ul>
              <li>4. Timeout & Winner Determination</li>
                <ul>
                  <li>•	If the game times out, the winner is determined based on the total points accumulated.</li>
                  <li>•	If both players have the same points at timeout, the match is considered a draw.</li>
                  <li>•	If a player disconnects or abandons the match, they automatically lose the game.</li>
                </ul>
              </ul>
         
             <p>2.3 Special Game Conditions</p>
             <ul>
              <li>•	Draw Conditions: </li>
                <ul>
                  <li>•	Stalemate (no legal moves and not in check).</li>
                  <li>•	Threefold repetition (same position occurs three times).</li>
                  <li>•	Insufficient material (no possible checkmate).</li>
                  <li>•	50-move rule (no pawn moves or captures in 50 moves).</li>
                </ul>
             </ul>

             <h3>3. Timer Rules</h3>
             <ul>
              <li>•	Each player gets 10 minutes to complete all their moves.</li>
              <li>•	If a player’s timer runs out, the opponent wins unless the losing player has more points (see point system).</li>
              <li>•	Players must make moves within their time limit, or the game will be auto-forfeited.</li>
             </ul>
           
             <h3>4. Points System & Timeout Rules</h3>
             <p>To ensure fair play, we have implemented a points-based system in case of timeout scenarios.</p>
             <p>4.1 Point Allocation for Capturing Pieces</p>
             <ul>
              <li>•	Pawn → 1 Point</li>
              <li>•	Knight → 3 Points</li>
              <li>•	Bishop → 3 Points</li>
              <li>•	Rook → 5 Points</li>
              <li>•	Queen → 9 Points</li>
              <li>•	King → 0 Points (Checkmate ends the game instantly)</li>
             </ul>
             <p>4.2 Timeout Winner Rule</p>
             <ul>
              <li>•	If one player checkmates the other before timeout, they win.</li>
              <li>•	If timeout occurs, the player with the higher points wins.</li>
              <li>•	If both players have equal points, the game ends in a draw.</li>
             </ul>

             <h3>5. Fair Play & Conduct Rules</h3>
             <ul>
              <li>•	No External Assistance: Players must not use chess engines, bots, or external help.</li>
              <li>•	No Multiple Accounts: Each player must use only one registered account.</li>
              <li>•	Respectful Behaviour: Abusive language, harassment, or cheating will lead to account suspension.</li>
              <li>•	Match Abandonment: If a player intentionally quits a game, the opponent is awarded the victory.</li>
             </ul>

             <h3>6. Other Regulations</h3>
             <ul>
              <li>•	Regular updates & enhancements will be made to improve gameplay and experience.</li>
              <li>•	Any technical issues or disputes must be reported via the support section.</li>
              <li>•	The platform reserves the right to modify rules and regulations to ensure a fair gaming environment.</li>
             </ul>

        </div>
      </div>
    </div>
  )
}

export default RulesAndRegulations