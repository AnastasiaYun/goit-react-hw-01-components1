import SocialProfile from "./components/SocialProfile/SocialProfile";
import Friends from "./components/Friend-list/Friends-list";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import friends from "./components/data/friends.json";
import profile from "./components/data/profile.json";
import statisticalData from "./components/data/statisticalData.json";
import transactions from "./components/data/transactions.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SocialProfile
        name={profile.name}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
