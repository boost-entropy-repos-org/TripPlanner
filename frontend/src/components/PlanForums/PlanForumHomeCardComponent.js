import React, {Component} from "react";
import {Link} from "react-router-dom";
import illustration from "../../assets/illustration-4.jpg";

class PlanForumHomeCardComponent extends Component {
    state = {
        plan: this.props.plan
    }

    render() {
        return <li className="articles__article">
            <Link className="articles__link" to={`plan-forum/${this.state.plan._id}`}>
                <div className="articles__content articles__content--lhs">
                     <h2 className="articles__title wbdv-high-index">{this.state.plan.name}</h2>
                    <img src={illustration} alt="illus" className="wbdv-fixed-img-1"/>
                    <div className="articles__footer">
                        <h5 className="text-center">By:</h5>
                    </div>
                </div>
                <div className="articles__content articles__content--rhs"
                     aria-hidden="true">
                    <h2 className="articles__title wbdv-high-index">{this.state.plan.name}</h2>
                    <img src={illustration} alt="illus" className="wbdv-fixed-img-1"/>
                    <div className="articles__footer">
                        <h5 className="text-center">By: </h5>
                    </div>
                </div>
            </Link>
        </li>
    }
}

export default PlanForumHomeCardComponent;
