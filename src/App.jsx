import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Visualize from "./pages/Visualize";
import Sort from "./components/sortingComponents/sort";
import Tree from "./components/treeTraversal/Tree";
import Pathfinder from "./components/pathfinderComponents/pathfinder";
import Search from "./components/searchComponents/search";
import RecursiveSort from "./components/recursiveSortingComponents/recursiveSort";
import { drawerWidth } from "./components/DrawerCon";
import { styled } from "@mui/material";
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

function App() {
  return (
    <Main>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Sort />}
          />
          <Route path="/visualize/sort" element={<Sort />} />
          <Route path="/visualize/recursive-sort" element={<RecursiveSort />} />
          <Route path="/visualize/tree-traversal" element={<Tree />} />
          <Route path="/visualize/pathfind" element={<Pathfinder />} />
          <Route path="/visualize/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </Main>
  );
}

export default App;
