import './Leader.css';

// Example of a data array that
// you might receive from an API
const data = [
{ rank: 1,name: "Anom", model: "BERT", href: "https://github.com/nyu-mll/nyu-ai-school-2023" ,score:"99.5%"},
{ rank: 2,name: "Megha", model: "GPT", href: "https://github.com/nyu-mll/quality" ,score:"98.3%"},
{ rank: 3,name: "Subham", model: "Robert", href: "https://github.com/nyu-mll/SQuALITY",score:"97.9%"},
{ rank: 4,name: "Aksh", model:"BERTweet", href: " https://github.com/akshpatel3110/GLUE", score:"96.3%"},
{rank: 5, name: "Yash", model:"Albert", href: "https://github.com/akshpatel3110/GLUE", score:"95.04%"},
{rank: 6, name: "Harsh", model:"BIOGPT", href: "https://github.com/akshpatel3110/GLUE", score:"94.04%"},
{rank: 7, name: "Jeet", model:"BERT", href: "https://github.com/akshpatel3110/GLUE", score:"93.04%"},
{rank: 8, name: "John", model:"GPT", href: "https://github.com/akshpatel3110/GLUE", score:"92.04%"},
{rank: 9, name: "Meet", model:"BIOGPT", href: "https://github.com/akshpatel3110/GLUE", score:"91.04%"},
{rank: 10, name: "Jash", model:"Albert", href: "https://github.com/akshpatel3110/GLUE", score:"90.04%"},
{rank: 11, name: "Neil", model:"BERT Large", href: "https://github.com/akshpatel3110/GLUE", score:"89.04%"}
]

function Leaderboard() {
return (
	
	<div className="Leader">
		<table>
		<tr>
		<th>Rank</th>
		<th>Name</th>
		<th>Model</th>
		<th>Github</th>
		<th>Score</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.rank}</td>
			<td>{val.name}</td>
			<td>{val.model}</td>
			<td><a href={val.href}>{val.href}</a></td>
			<td>{val.score}</td>
			</tr>
		)
		})}
	</table>
	</div>
);
}

export default Leaderboard;