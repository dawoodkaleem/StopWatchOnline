// import { useState, useEffect } from "react";
// const Stopwatch = () => {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (isRunning) {
//       timer = setTimeout(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [isRunning, time]);

//   const formatTime = (time) => {
//     const hours = String(Math.floor(time / 3600)).padStart(2, 0);
//     const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, 0);
//     const seconds = String(Math.floor(time % 60)).padStart(2, 0);
//     return `${hours}:${minutes}:${seconds}`;
//   };

//   const handelStart = () => {
//     setIsRunning(true);
//   };
//   const handelPause = () => {
//     setIsRunning(false);
//   };
//   const handelReset = () => {
//     setIsRunning(false);
//     setTime(0);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.timeDisplay}>{formatTime(time)}</div>
//       <div style={styles.buttonContainer}>
//         <button
//           style={{
//             ...styles.button,
//             backgroundColor: isRunning ? "lightgray" : "gray",
//           }}
//           onClick={handelStart}
//           disabled={isRunning}>
//           Start
//         </button>
//         <button
//           style={{
//             ...styles.button,
//             backgroundColor: isRunning ? "lightgray" : "gray",
//           }}
//           onClick={handelPause}
//           disabled={!isRunning}>
//           Pause
//         </button>
//         <button style={{ ...styles.button }} onClick={handelReset}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//     width: "100%",
//     backgroundColor: "#f4f4f4",
//     fontFamily: "Arial,sans-serif",
//   },
//   timeDisplay: {
//     fontSize: "48px",
//     fontWeight: "bold",
//     marginBottom: "20px",
//   },
//   buttonContainer: {
//     display: "flex",
//     gap: "10px",
//   },
//   button: {
//     padding: "10px 20px",
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default Stopwatch;

import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setTimeout(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isRunning, time]);

  const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(Math.floor(time % 60)).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };
  const handlePause = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div style={styles.container}>
      <div style={styles.timeDisplay}>{formatTime(time)}</div>
      <div style={styles.buttonContainer}>
        <button
          style={{
            ...styles.button,
            backgroundColor: isRunning ? "#d3d3d3" : "#28a745", // Green for active start
            cursor: isRunning ? "not-allowed" : "pointer",
          }}
          onClick={handleStart}
          disabled={isRunning}>
          Start
        </button>
        <button
          style={{
            ...styles.button,
            backgroundColor: isRunning ? "green" : "#d3d3d3", // Red for active pause
            cursor: isRunning ? "pointer" : "not-allowed",
          }}
          onClick={handlePause}
          disabled={!isRunning}>
          Pause
        </button>
        <button
          style={{
            ...styles.button,
            backgroundColor: "#6c757d", // Neutral gray for reset
            cursor: "pointer",
          }}
          onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
    backgroundColor: "#f4f4f4",
    fontFamily: "Arial, sans-serif",
  },
  timeDisplay: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "white",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
};

export default Stopwatch;
