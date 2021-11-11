import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import PersonIcon from '@material-ui/icons/Person'
import ScheduleIcon from '@material-ui/icons/Schedule'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ReportIcon from '@material-ui/icons/Report'
import SettingsIcon from '@material-ui/icons/Settings'
import HelpIcon from '@material-ui/icons/Help'

const SidebarData = [
    {
        title: 'Dashbroand',
        href: '/dashboard',
        icon: <DashboardIcon />
    },
    {
        title: 'Employess',
        href: '/employess',
        icon: <PeopleIcon />
    },
    {
        title: 'Customers',
        href: '/customers',
        icon: <PersonIcon />
    },
    {
        title: 'Schedules',
        href: '/schedules',
        icon: <ScheduleIcon />
    },
    {
        title: 'Job Completion',
        href: '/jobcompletion',
        icon: <AssignmentTurnedInIcon />
    },
    {
        title: 'Reports',
        href: '/reports',
        icon: <ReportIcon />
    },
    {
        title: 'Settings',
        href: '/settings',
        icon: <SettingsIcon />
    },
    {
        title: 'Help',
        href: '/help',
        icon: <HelpIcon />
    },

]

export default SidebarData