import axios from 'axios'

export async function fetchRoutine () {
    try {
        const res = await axios.get('Routine.json')
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}
