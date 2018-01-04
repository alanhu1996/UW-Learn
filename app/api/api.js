import axios from 'axios'

export const getCourseList = () => {
	return axios.get('/general/uwCoursesByCategory?subject=CS').then(response => {
		console.log(response)
		return response.data	
	}) 


}