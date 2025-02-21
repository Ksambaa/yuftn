import { ArrowRight, Play, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// TicTacToe component
function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);

  const checkWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const minimax = (squares: (string | null)[], depth: number, isMaximizing: boolean): number => {
    const winner = checkWinner(squares);
    if (winner === 'O') return 10 - depth;
    if (winner === 'X') return depth - 10;
    if (squares.every((square: string | null) => square !== null)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < squares.length; i++) {
        if (squares[i] === null) {
          squares[i] = 'O';
          const score = minimax(squares, depth + 1, false);
          squares[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < squares.length; i++) {
        if (squares[i] === null) {
          squares[i] = 'X';
          const score = minimax(squares, depth + 1, true);
          squares[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const botMove = () => {
    let bestScore = -Infinity;
    let bestMove = null;
    const newBoard = [...board];

    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] === null) {
        newBoard[i] = 'O';
        const score = minimax(newBoard, 0, false);
        newBoard[i] = null;
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }

    if (bestMove !== null) {
      newBoard[bestMove] = 'O';
      setBoard(newBoard);
      setIsPlayerTurn(true);
      
      const winner = checkWinner(newBoard);
      if (winner) {
        setGameStatus('The DJ wins!');
        setIsGameOver(true);
      } else if (newBoard.every(square => square !== null)) {
        setGameStatus("It's a draw!");
        setIsGameOver(true);
      }
    }
  };

  useEffect(() => {
    if (!isPlayerTurn && !isGameOver) {
      const timer = setTimeout(botMove, 500);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, isGameOver]);

  const handleClick = (index: number) => {
    if (board[index] || !isPlayerTurn || isGameOver) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    
    const winner = checkWinner(newBoard);
    if (winner) {
      setGameStatus('You win!');
      setIsGameOver(true);
    } else if (newBoard.every(square => square !== null)) {
      setGameStatus("It's a draw!");
      setIsGameOver(true);
    } else {
      setIsPlayerTurn(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setGameStatus('');
    setIsGameOver(false);
  };

  return (
    <div className="max-w-lg mx-auto text-center">
      <div className="relative mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text">
          Challenge Yuftn in X/O
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-red-600 mx-auto mb-6"></div>
        <p className="text-amber-200/80 text-lg">Win for a chance to get a free ticket</p>
      </div>
      
      <div 
        className="grid grid-cols-3 gap-3 mb-8 relative"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B45309' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0v20L0 40z'/%3E%3Cpath d='M20 20L40 0v20L20 40z'/%3E%3C/g%3E%3C/svg%3E')"
        }}
      >
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`
              h-24 rounded-xl font-bold text-3xl transition-all transform
              relative overflow-hidden
              ${cell ? 'bg-gradient-to-br from-amber-900/50 to-red-900/30' : 'bg-gradient-to-br from-amber-900/30 to-red-900/20 hover:from-amber-900/40 hover:to-red-900/30'}
              ${isGameOver ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-[1.02]'}
              border border-amber-900/20 backdrop-blur-sm
            `}
          >
            <span className={`
              relative z-10 
              ${cell === 'X' ? 'text-amber-500' : 'text-amber-300'}
              ${cell && 'animate-scale-in'}
            `}>
              {cell}
            </span>
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-amber-500/5 to-red-500/5 rounded-bl-xl"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-amber-500/5 to-red-500/5 rounded-tr-xl"></div>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {gameStatus && (
          <p className="text-xl font-semibold text-amber-200 animate-fade-in">
            {gameStatus}
          </p>
        )}
        <button
          onClick={resetGame}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-red-600 
            rounded-full text-white font-medium transition-all transform hover:scale-105
            hover:from-amber-600 hover:to-red-700 shadow-lg shadow-amber-900/20"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

function Home() {
  const tracks = [
    {
      title: "Rhythmic frost",
      soundCloudId: "1954667759"
    },
    {
      title: "Whispers X Yeke Yeke",
      soundCloudId: "1809750303"
    },
    {
      title: "Yibona X Rise",
      soundCloudId: "1801258644"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#1a0f0f]">
      {/* Hero Section with Moroccan-inspired Background */}
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('src/assets/images/baackground.jpg')"
          }}
        >
          {/* Moroccan Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B45309' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950 via-amber-950/80 to-transparent">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-7xl md:text-9xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-600">YUFTN</h1>
                <div className="h-1 w-24 bg-amber-500 mb-8"></div>
                <p className="text-xl md:text-2xl mb-12 leading-relaxed text-amber-100">
                  A musical prodigy fusing Afrobeat rhythms with Moroccan melodies. From the heart of North Africa, bringing vibrant sounds that ignite the soul. Experience the fusion of traditional and modern beats that will transport you to the magical nights of Marrakech.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/music" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 rounded-full text-white transition-all transform hover:scale-105"
                  >
                    Listen Now <Play className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    to="/connect" 
                    className="inline-flex items-center px-8 py-4 border-2 border-amber-500 hover:bg-amber-500/10 text-amber-500 rounded-full transition-all transform hover:scale-105"
                  >
                    Book Event <Calendar className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Release Section */}
      <div className="bg-[#1a0f0f] py-20">
        <div 
          className="max-w-7xl mx-auto px-4 relative"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B45309' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0v20L0 40z'/%3E%3Cpath d='M20 20L40 0v20L20 40z'/%3E%3C/g%3E%3C/svg%3E')"
          }}
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-amber-100">Latest Releases</h2>
            <Link to="/music" className="text-amber-500 hover:text-amber-400 flex items-center">
              View All <ArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-amber-900/50 to-red-900/30 rounded-3xl overflow-hidden p-6 border border-amber-900/30 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-semibold text-amber-100 mb-4">{track.title}</h3>
                <div className="rounded-xl overflow-hidden bg-black/40">
                  <iframe
                    width="100%"
                    height="100"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.soundCloudId}&amp;color=%23B45309&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true`}
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tic Tac Toe Game Section */}
      <div 
        className="bg-gradient-to-b from-[#1a0f0f] to-amber-950 py-20"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B45309' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M50 50l20-20h-40l20 20zm0 0l20 20h-40l20-20z'/%3E%3C/g%3E%3C/svg%3E')"
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <TicTacToe />
        </div>
      </div>
    </div>
  );
}

export default Home;