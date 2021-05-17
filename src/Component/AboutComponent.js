import React from 'react';
import { Progress } from 'antd';
import './index.css';
import backg2 from '../Asset/backg2.jpeg';
import { Card } from 'antd';
import {
    RightOutlined,
    SmileTwoTone,
    ScheduleTwoTone,
    CustomerServiceTwoTone,
    DashboardTwoTone,

    

} from '@ant-design/icons'


const AboutComponent = () => {
    return (
        <Card className="about-container">
            <h1 className="paragraph-about5">About</h1>
            <p className="paragraph-about">A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group

</p>
            <img src={backg2} alt="about-profile" className="about-profile" />
            <h2 className="paragraph-about2">UI/UX Designer & Web Developer.</h2>
            <p className="paragraph-about3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</p>

            <div className="about-status">
                <p><RightOutlined /><span className="about-status2" >Birthday</span>:12 May 1995</p>
                <p><RightOutlined /><span className="about-status2">Website</span>: www.example.com</p>
                <p><RightOutlined /><span className="about-status2">Phone</span>: +123 456 7890</p>
                <p><RightOutlined /><span className="about-status2">City</span>: New York, USA</p>
                <p><RightOutlined /><span className="about-status2">Age</span>: 30</p>
                <p><RightOutlined /><span className="about-status2">Degree</span>: Master</p>
                <p><RightOutlined /><span className="about-status2">PhEmailone</span>: email@example.com</p>
                <p><RightOutlined /><span className="about-status2">Freelance</span>: Available</p>


            </div>
            <p className="paragraph-about4">Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
</p>
            <h1 className="paragraph-about5">Facts</h1>
            <p className="paragraph-about">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.

</p>
            <div className="about-facts" >
                <span><SmileTwoTone />  232</span><p className="fact-about">Happy Clients</p><p className="fact-about1">consequuntur quae</p>
                <span><ScheduleTwoTone /> 232</span><p className="fact-about">Projects </p><p className="fact-about1">consequuntur quae</p>
                <span><CustomerServiceTwoTone /> 1453</span><p className="fact-about">Hours Of Support </p><p className="fact-about1">aut commodi quaerat </p>
                <span><DashboardTwoTone /> 32</span><p className="fact-about">Hours Of Support </p><p className="fact-about1">aut commodi quaerat </p>

            </div>


            <h1 className="paragraph-about5">Skills</h1>

            <p className="paragraph-about">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
</p>

<div className="about-skills" >
   HTML <Progress percent={100} size="small" status="active" />
CSS<Progress percent={90} size="small" status="active" />
JAVASCRIPT<Progress percent={75} size="small" status="active" />
PHP<Progress percent={80} size="small" status="active" />
WORDPRESS<Progress percent={90} size="small" status="active" />
PHOTOSHOP<Progress percent={55} size="small" status="active" />
    
</div>

        </Card>


    )


}
export default AboutComponent;