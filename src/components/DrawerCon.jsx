import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FilterListIcon from '@mui/icons-material/FilterList';
export const drawerWidth = 240;

function DrawerCon({ children }) {
    const items = [
        { title: "Search", icon: <SearchIcon />, path: '/visualize/search' },
        { title: "Sort", icon: <SortIcon />, path: '/visualize/sort' },
        { title: "Advanced Sort", icon: <FilterListIcon />, path: '/visualize/recursive-sort' },
        { title: "Tree", icon: <AccountTreeIcon />, path: '/visualize/tree-traversal' }
    ]
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={true}
        >

            <List>
                <ListItem>
                    <ListItemText primary="Visualize Algorithms" />
                </ListItem>
                <Divider />
                {items.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <Link
                            to={item.path}
                            className='w-full'
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
                <Divider sx={{ my: 5 }} />
                {children}
            </List>

        </Drawer>
    )
}

export default DrawerCon