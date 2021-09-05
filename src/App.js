import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import ButtonTheme from "./components/ButtonTheme";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoContextProvider from "./contexts/TodoContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
            <TodoList />
          </TodoContextProvider>
        </AuthContextProvider>
        <ButtonTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
