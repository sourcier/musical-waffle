import React from "react";
import { Hero } from "../components/Hero";

export class BlogPost extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero title="Blog Post" />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column content is-medium">
                <h1>Hello World</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  accumsan, metus ultrices eleifend gravida, nulla nunc varius
                  lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper
                  dui. Fusce erat odio, sollicitudin vel erat vel, interdum
                  mattis neque.
                </p>
                <h2>Second level</h2>
                <p>
                  Curabitur accumsan turpis pharetra augue tincidunt blandit.
                  Quisque condimentum maximus mi, sit amet commodo arcu rutrum
                  id. Proin pretium urna vel cursus venenatis. Suspendisse
                  potenti. Etiam mattis sem rhoncus lacus dapibus facilisis.
                  Donec at dignissim dui. Ut et neque nisl.
                </p>
                <ul>
                  <li>
                    In fermentum leo eu lectus mollis, quis dictum mi aliquet.
                  </li>
                  <li>
                    Morbi eu nulla lobortis, lobortis est in, fringilla felis.
                  </li>
                  <li>
                    Aliquam nec felis in sapien venenatis viverra fermentum
                  </li>
                  <li>nec lectus. Ut non enim metus.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
