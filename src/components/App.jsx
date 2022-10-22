import user from "../common/user.json";
import data from "../common/data.json";
import friends from "../common/friends.json";
import transactions from "../common/transactions.json";

import { SocialsProfile } from "./SocialsProfile/SocialsProfile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {  
  return (    
    <div style={{  color: 'black' }}>
      <SocialsProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}    
        stats={user.stats}        
      ></SocialsProfile>
      <hr></hr>
      <Statistics title="Upload stats" stats={data}></Statistics>
      <hr></hr>
      <FriendsList friends={friends}></FriendsList>
      <hr></hr>
      <TransactionHistory transactions={transactions}></TransactionHistory>
    </div>
    
  );
};
