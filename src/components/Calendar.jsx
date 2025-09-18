import Event from "./Events";
const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='McKenna Frisbee Tournament 🥏' color='blue' location='Penn Park' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='McKenna Frisbee Tournament 🥏' color='blue' location='Penn Park' />
                    </tr>
                    <tr>
                        <td className="time">9am</td>
                        <td></td>
                        <Event event='Work 🏢' color='pink' location='Austin'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <Event event='McKenna Class 💻' color='blue' location='English Department' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <Event event='CodePath Homework Due ‼️' color='green'/>
                        <td></td>
                        <td></td>
                        <Event event='McKenna Brunch 🥞' color='blue' location="Sabrina's Cafe" />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <Event event='CodePath WEB 102 Lecture' color='green' location='Zoom'/>
                        <td></td>
                        <td></td>
                        <Event event='McKenna Class 💻' color='blue' location='Engineering Auditorium' />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 PM</td>
                        <td></td>
                        <td></td>
                        <Event event='CodePath WEB 102 Office Hours' color='green' location ='Zoom' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='CodePath WEB 102 Office Hours' color='green' location='Zoom' />
                    </tr>
                    <tr>
                        <td className="time">2 PM</td>
                        <td></td>
                        <td></td>
                        <Event event='School 📚' color='pink' location='San Marcos' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 PM</td>
                        <td></td>
                        <td></td>
                        <Event event='McKenna Frisbee Practice 🥏' color='blue' location='Franklin Field' />
                        <td></td>
                        <Event event='McKenna Frisbee Practice 🥏' color='blue' location='Franklin Field' />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 PM</td>
                        <td></td>
                        <td></td>
                        <Event event='School 📚' color='pink' location='San Marcos' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Calendar;