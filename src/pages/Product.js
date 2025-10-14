import "./Product.css" 
import { Link } from 'react-router-dom'
import Image1 from '../assets/products/Image1.png';
import Image2 from '../assets/products/Image2.png';
import Image3 from '../assets/products/Image3.png';
import Image4 from '../assets/products/Image4.png';
import Image5 from '../assets/products/Image5.png';

const Product = () => {
  return (
    <div className="product-page">
      <div className="page-header">
        <h1>Products</h1>
      </div>

      <div className="content-container">
        <div className="product-content">
          

          <h2>Saara Creative Pvt Ltd - Under Brand Name <span className="footer-logo-text">“MyChessCircle_UK”</span> – Online Chess Gaming Platform</h2>
          
          <h3>Compete & Win!</h3>
          <table className="tax-table">
            <thead>
              <tr>
                <th style={{fontSize: "1.1rem"}}>Game Mode</th>
                <th style={{fontSize: "1.1rem"}}>Entry Fee</th>
                <th style={{fontSize: "1.1rem"}}>Players</th>
                <th style={{fontSize: "1.1rem"}}>Prize Pool</th>
                <th style={{fontSize: "1.1rem"}}>Join/Play</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Daily Chess Tournaments</td>
                <td>£50</td>
                <td>1024</td>
                <td>£5,000</td>
                <td><Link to="/downloads" className="label">[Join Now]</Link></td>
              </tr>
              <tr>
                <td>Weekend Grand Tournaments</td>
                <td>£30</td>
                <td>2048</td>
                <td>£8,000</td>
                <td><Link to="/downloads" className="label">[Join Now]</Link></td>
              </tr>
              <tr>
                <td>Monthly Mega Tournaments</td>
                <td>£50</td>
                <td>4096</td>
                <td>£15,000</td>
                <td><Link to="/downloads" className="label">[Join Now]</Link></td>
              </tr>
              <tr>
                <td>One-to-One Chess Battle</td>
                <td>£1 - £20</td>
                <td>2</td>
                <td>£1.50 - £30</td>
                <td><Link to="/downloads" className="label">[Play Now]</Link></td>
              </tr>
              <tr>
                <td>Play With Friends</td>
                <td>Custom</td>
                <td>2</td>
                <td>Custom</td>
                <td><Link to="/downloads" className="label">[Create Game]</Link></td>
              </tr>
            </tbody>
          </table>

          {/* 1. Daily Chess Tournament */}
          <div className="tournament-content-row">
            <div className="tournament-content">
              <h3>1. Daily Chess Tournaments – Win up to £5,000 Every Day!</h3>
              <b>Overview:</b>
              <p>Test your chess skills daily against a pool of competitive players in our fast-paced, skill-driven <span className="white-strong">Daily Chess Tournaments</span>. This is where consistent players come to earn, learn, and improve every single day.</p>
              <b>Game Format:</b>
              <ul>
                <li>• Entry Fee: £50</li>
                <li>• Total Players: Up to 1,024</li>
                <li>• Time Control: 10 minutes per player</li>
                <li>• Knockout Format: Single elimination</li>
                <li>• Prize Pool: £5,000 distributed among top winners</li>
              </ul>
              <b>Features:</b>
              <ul>
                <li>• Real-time pairings and fair matchmaking</li>
                <li>• Instant payout for winners</li>
                <li>• Live leaderboard tracking</li>
                <li>• Anti-cheat mechanisms and real-player-only enforcement</li>
                <li>• Runs Monday to Thursday, multiple slots daily</li>
              </ul>
              <b>Who Should Join:</b>
              <p>Players looking for regular competitive action with high engagement and daily earning opportunities.</p>
            </div>
            <div className="tournament-image">
              <div className="image-btn-wrapper" style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                <img src={Image1} alt="Daily Chess Tournament" />
                <div className="image-btn-center" style={{ position: 'absolute', left: '50%', bottom: '18px', transform: 'translateX(-50%)', zIndex: 2 }}>
                  <Link to="/downloads" className="yellow-btn image-join-btn">Join Now</Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Weekend Grand Tournament */}
          <div className="tournament-content-row">
            <div className="tournament-image">
              <div className="image-btn-wrapper" style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                <img src={Image2} alt="Weekend Grand Tournament" />
                <div className="image-btn-center" style={{ position: 'absolute', left: '50%', bottom: '18px', transform: 'translateX(-50%)', zIndex: 2 }}>
                  <Link to="/downloads" className="yellow-btn image-join-btn">Join Now</Link>
                </div>
              </div>
            </div>
            <div className="tournament-content">
              <h3>2. Weekend Grand Tournaments – Win up to £8,000 Every Week!</h3>
              <b>Overview:</b>
              <p>Step into the arena for our high-stakes <span className="white-strong">Weekend Grand Tournaments</span>, hosted every Saturday and Sunday. This is your chance to shine against top-rated players in a grand event with wider exposure and a larger prize pool.</p>
              <b>Game Format:</b>
              <ul>
                <li>• Entry Fee: £30</li>
                <li>• Total Players: 2,048 max</li>
                <li>• Format: Multi-round knockout</li>
                <li>• Time Control: 10 minutes per side</li>
                <li>• Prize Pool: £8,000</li>
              </ul>
              <b>Features:</b>
              <ul>
                <li>• Scheduled rounds throughout the day</li>
                <li>• Automated bracket management</li>
                <li>• WhatsApp/SMS notifications for round timings</li>
                <li>• Live-stream finals</li>
                <li>• Real-time support team for technical queries</li>
              </ul>
              <b>Who Should Join:</b>
              <p>Players who enjoy weekend challenges and want to make their mark in the chess gaming community while earning solid rewards.</p>
            </div>
          </div>

          {/* 3. Monthly Mega Tournament */}
          <div className="tournament-content-row">
            <div className="tournament-content">
              <h3>3. Monthly Mega Tournaments – Win up to £15,000 Every Month!</h3>
              <b>Overview:</b>
              <p>The most prestigious event on our platform — the <span className="white-strong">Monthly Mega Tournaments</span> is the ultimate battleground for elite players. With a high entry count and generous prize pool, this event attracts serious competitors and offers real recognition.</p>
              <b>Game Format:</b>
              <ul>
                <li>• Entry Fee: £50</li>
                <li>• Total Players: 4,096</li>
                <li>• Format: Swiss + Knockout Finals</li>
                <li>• Time Control: 10 minutes</li>
                <li>• Prize Pool: £15,000</li>
              </ul>
              <b>Features:</b>
              <ul>
                <li>• Long-format Tournaments for strategic depth</li>
                <li>• Monthly player rankings and medals</li>
                <li>• Certificates and badges for top 50 finishers</li>
                <li>• Featured in "Champions Spotlight" section</li>
                <li>• End-of-month special with live final commentary</li>
              </ul>
              <b>Who Should Join:</b>
              <p>Serious chess players looking to build their ranking, earn substantial rewards, and become recognized on a national chess e-sports stage.</p>
            </div>
            <div className="tournament-image">
              <div className="image-btn-wrapper" style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                <img src={Image3} alt="Monthly Mega Tournament" />
                <div className="image-btn-center" style={{ position: 'absolute', left: '50%', bottom: '18px', transform: 'translateX(-50%)', zIndex: 2 }}>
                  <Link to="/downloads" className="yellow-btn image-join-btn">Join Now</Link>
                </div>
              </div>
            </div>
          </div>

          {/* 4. One-to-One Chess Battle (1v1 Mode) */}
          <div className="tournament-content-row">
            <div className="tournament-image">
              <div className="image-btn-wrapper" style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                <img src={Image4} alt="One-to-One Chess Battle" />
                <div className="image-btn-center" style={{ position: 'absolute', left: '50%', bottom: '18px', transform: 'translateX(-50%)', zIndex: 2 }}>
                  <Link to="/downloads" className="yellow-btn image-join-btn">Play Now</Link>
                </div>
              </div>
            </div>
            <div className="tournament-content">
              <h3>4. One-to-One Chess Battle (1v1 Mode)</h3>
              <b>Overview:</b>
              <p>Looking for quick, competitive, and rewarding games? Try our <span className="white-strong">One-to-One Chess Battle</span>. Face off against real opponents in real-time and win instant Prize Money for every win.</p>
              <b>Game Format:</b>
              <ul>
                <li>• Entry Fee: £10</li>
                <li>• Winning Reward: £15 (after platform fee)</li>
                <li>• Time Control: 5 -15 minutes Blitz</li>
                <li>• Format: Single match</li>
                <li>• Available: 24/7</li>
              </ul>
              <b>Features:</b>
              <ul>
                <li>• Instant matchmaking with opponents of similar rating</li>
                <li>• Fast-paced games designed for mobile and desktop</li>
                <li>• Withdraw winnings instantly</li>
                <li>• Report & block feature for fair play</li>
                <li>• Perfect for quick chess sessions with real earnings</li>
              </ul>
              <b>Who Should Join:</b>
              <p>Casual or mid-level players looking to test their skills, earn quickly, and enjoy rapid chess action.</p>
            </div>
          </div>

          {/* 5. Play with Friends Mode */}
          <div className="tournament-content-row">
            <div className="tournament-content">
              <h3>5. Play with Friends Mode</h3>
              <b>Overview:</b>
              <p>Our <span className="white-strong">Play with Friends Mode</span> lets you create private game rooms and challenge your friends, family, or club members. It's chess made personal — with options to add stakes, set timers, and create your own rules.</p>
              <b>Game Format:</b>
              <ul>
                <li>• Customizable entry fee (free or paid)</li>
                <li>• Player Limit: 2 per room</li>
                <li>• Time Control: 5-15 minutes</li>
                <li>• Invite link or username-based access</li>
                <li>• Optional prize setup (winner takes all)</li>
              </ul>
              <b>Features:</b>
              <ul>
                <li>• Private game room with password protection</li>
                <li>• Add custom prize amount and split options</li>
                <li>• Ideal for club events, school duels, or casual sessions</li>
                <li>• Share results and stats with friends</li>
                <li>• Social and fun environment, yet skill-focused</li>
              </ul>
              <b>Who Should Join:</b>
              <p>Anyone who wants to enjoy chess with their circle, with or without monetary stakes, in a controlled, secure game room.</p>
            </div>
            <div className="tournament-image">
              <div className="image-btn-wrapper" style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                <img src={Image5} alt="Play With Friends" />
                <div className="image-btn-center" style={{ position: 'absolute', left: '50%', bottom: '18px', transform: 'translateX(-50%)', zIndex: 2 }}>
                  <Link to="/downloads" className="yellow-btn image-join-btn">Create Game</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product
