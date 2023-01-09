import { MongoClient} from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';
const DUMMY_MEETUPS = [
    {
        id : 'm1',
        title : 'The First Meetup',
        image : 'https://upload.wikimedia.org/wikipedia/commons/9/93/Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg',
        address : '52 Groove Street',
    },
    {
        id : 'm2',
        title : 'The Second Meetup',
        image : 'https://upload.wikimedia.org/wikipedia/commons/9/93/Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg',
        address : '51 Groove Street',
    },
]


function HomePage(props) {
   
    return <MeetupList meetups={props.meetups} />;
        
       
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//     };
// }
 export async function getStaticProps() {
    // you can fetch data from an API or smth

    const client = await MongoClient.connect('mongodb+srv://DumbGTname:Dondokambey1234567@cluster0.luqxctm.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    
    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 1
    };
}

export default HomePage;