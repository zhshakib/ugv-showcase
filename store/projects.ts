import axios from 'axios'

export async function fetchProjects() {
    try {
        const res = await axios.get('Projects.json')
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}
