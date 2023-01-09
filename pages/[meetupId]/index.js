import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails () {
    return (

        <MeetupDetail 
            image='https://upload.wikimedia.org/wikipedia/commons/9/93/Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg'
            title='The First Meetup'
            address='52 Groove Street'
            description='This is the First Meetup'
        />
           
    );

}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
                { params: {
                    meetupId: 'm1',
                } 
            },
                { params: {
                    meetupId: 'm2',
                }
            },
        ]
    }
}

export async function getStaticProps(context) {
    //get the API

    const meetupId = context.params.meetupId;

    console.log(meetupId);
    return {
        props: {
            //the data's name below this text is up to you
            meetupData: {
            image:'https://upload.wikimedia.org/wikipedia/commons/9/93/Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg',
            id: meetupId,
            title:'The First Meetup',
            address:'52 Groove Street',
            description:'This is the First Meetup',
             } 
        }
    }
}

export default MeetupDetails;