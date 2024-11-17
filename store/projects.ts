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
