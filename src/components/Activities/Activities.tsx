import React from "react";
import API from "../../API";
import { ActivityData } from "../../typings";
import Activity from "../Activity/Activity";
import Thinker from "../Thinker/Thinker";

interface ActivitiesProps {
}

const Activities: React.FunctionComponent<ActivitiesProps> = ({}) => {
	const [activities, setActivities] = React.useState<ActivityData[]>([]);
	const [thinking, setThinking] = React.useState(false);
	
	React.useEffect(() => {
		setThinking(true);
		API.getActivities()
			.then(r => {
				setThinking(false);
				setActivities(r);
			});
	}, []);

	return <div className="Activities">
		{
			thinking ?
				<Thinker className="Activities__thinker" /> :
				activities.map(activity => <Activity activity={activity} key={activity.key} />)
		}
	</div>;
};

export default Activities;

import "./Activities.style";
