import axios from 'axios'

export async function fetchProjects() {
    try {
        const res = await axios.get('http://localhost:5000/projects')
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function postProject(project: any) {
    try {
        const res = await axios.post('http://localhost:5000/projects', project)
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}
