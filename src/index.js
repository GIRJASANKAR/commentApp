import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails'
import ApprovalCard from "./ApprovalCard"
const App = () => {
    return (

        <div className="ui container comments">
            <ApprovalCard>
                Hey buddy aapke papa
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetails author="Sam" timeago="saturday at 3:40PM" text="nice post buddy" source={faker.image.avatar()} />
             </ApprovalCard>
            <ApprovalCard>
            <CommentDetails author="Alex" timeago="yesterday 4:55PM" text="keep it up buddy!" source={faker.image.avatar()} /> 
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetails author="Jane" timeago="today at 9:40AM" text="aag laga di bc" source={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetails author="Billy" timeago="today at 3:40PM" text="nice " source={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};




ReactDOM.render(<App />, document.querySelector('#root'));


