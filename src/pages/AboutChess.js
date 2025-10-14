import "./AboutChess.css"
import background21 from "../assets/images/background21.jpg"
// import background6 from "../assets/images/background6.jpg"
import background20 from "../assets/images/background20.jpg"
import historyOfChess from "../assets/images/History of Chess.jpg"
import { FaChessKing,FaChessQueen,FaChessRook,FaChessBishop,FaChessKnight,FaChessPawn } from "react-icons/fa"

const AboutChess = () => {
  return (
    <div className="about-chess-page">
      <div className="page-header">
        <h1>About Chess</h1>
      </div>

      <div className="content-container">
        <section className="chess-history">
          <h2>History of Chess</h2>
          <div className="history-content">
              <img src={historyOfChess} alt="History of Chess" />
            <div className="history-text">
              <h3>♟️History of Chess</h3>
              <p>Chess is not just a game — it's a timeless battle of strategy, skill, and intellect with a legacy that spans over 1,500 years. What began as a war game in ancient India has evolved into a global sport, played by millions online and offline.</p>
              <h3>🏛️Ancient Beginnings</h3>
              <p>Chess originated in India around the 6th century CE as a game called Chaturanga, representing the four divisions of the ancient army — infantry, cavalry, elephants, and chariots. It later spread to Persia, where it became known as Shatranj. The Persian phrase "Shah Mat" (meaning "the king is helpless") is the origin of the term Checkmate. </p>
              <h3>🌍Global Evolution</h3>
              <p>By the 15th century, the game took a modern shape — introducing the queen's powerful moves and long-range bishops, making the game faster and more exciting.</p>
              <h3>🏆The Era of Champions</h3>
              <p>The 19th century saw the rise of international competition and the first official World Chess Championship in 1886. The 20th century was dominated by various grandmasters turning chess into a professional sport.</p>
              <h3>💻Chess Today</h3>
              <p>With the rise of the internet and mobile apps, chess has transformed into a digital phenomenon. Platforms like ours bring this ancient game to your fingertips, combining tradition with technology for players of all ages.</p>
            </div>
          </div>
        </section>

        <section className="chess-pieces">
          <h2>Chess Pieces</h2>
          <div className="pieces-grid">
            <div className="piece-card">
              <div className="piece-image"><FaChessKing /></div>
                <h3>King</h3>
                <p>The king moves one square in any direction. The king has a special move called castling.</p>
            </div>
            <div className="piece-card">
              <div className="piece-image"><FaChessQueen /></div>
                <h3>Queen</h3>
                <p>The queen combines the power of the rook and bishop and can move any number of squares along a rank, file or diagonal.</p>
            </div>
            <div className="piece-card">
              <div className="piece-image"><FaChessRook /></div>
                <h3>Rook</h3>
                <p>The rook can move any number of squares along a rank or file.</p>
            </div>
            <div className="piece-card">
              <div className="piece-image"><FaChessBishop /></div>
                <h3>Bishop</h3>
                <p>The bishop can move any number of squares diagonally.</p>
            </div>
            <div className="piece-card">
              <div className="piece-image"><FaChessKnight /></div>
                <h3>Knight</h3>
                <p>The knight moves to any of the closest squares that are not on the same rank, file, or diagonal, thus making an "L" shape.</p>
            </div>
            <div className="piece-card">
              <div className="piece-image"><FaChessPawn /></div>
                <h3>Pawn</h3>
                <p>The pawn moves forward one square, but captures diagonally. On its first move, it can move two squares forward.</p>
            </div>
          </div>
        </section>

        <section className="chess-rules">
          <h2>Rules of Chess</h2>
          <div className="rules-content">
            <div className="rules-text">
              <p>Chess is a two-player strategy board game played on a checkered board with 64 squares arranged in an 8×8 grid. At the start, each player controls sixteen pieces: one king, one queen, 
                two rooks, two knights, two bishops, and eight pawns.</p>
              <p>The objective of the game is to checkmate the opponent's king, whereby the king is under immediate attack and there is no way for it to escape.</p>
              <p>There are also several ways a game can end in a draw.</p>
              <h3>Basic Rules:</h3>
              <ul>
                <li>The player with the white pieces always moves first.</li>
                <li>Players alternate turns, with one piece moved each turn (except for castling).</li>
                <li>Pieces are moved to either an unoccupied square or one occupied by an opponent's piece, which is captured.</li>
                <li>Each piece has its own way of moving.</li>
                <li>When a king is under immediate attack, it is said to be in check.</li>
                <li>When a king is in check and there is no legal move to escape, it is checkmate and the game is over.</li>
              </ul>
            </div>
            <div className="rules-image"><img src={background20} alt="Chess Rules" /></div>
          </div>
        </section>

        <section className="chess-strategy">
          <h2>Basic Chess Strategy</h2>
          <div className="strategy-content">
            <div className="strategy-image"><img src={background21} alt="Chess Strategy" /></div>
            <div className="strategy-text">
              <h3>Opening Principles:</h3>
              <ul>
                <li>Control the center of the board</li>
                <li>Develop your pieces quickly</li>
                <li>Castle early to protect your king</li>
                <li>Connect your rooks</li>
              </ul>

              <h3>Middle Game:</h3>
              <ul>
                <li>Create and exploit weaknesses</li>
                <li>Plan attacks and defenses</li>
                <li>Control open files and diagonals</li>
                <li>Coordinate your pieces</li>
              </ul>

              <h3>Endgame:</h3>
              <ul>
                <li>Activate your king</li>
                <li>Promote pawns when possible</li>
                <li>Know basic checkmate patterns</li>
                <li>Understand opposition and zugzwang</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutChess

