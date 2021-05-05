import "./App.css";
import Button from "./components/Button";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="StoriesBoard">
        <div className="Title">Buttons</div>
        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">{"<Button />"}</div>
            <Button></Button>
          </div>
          <div className="Storie">
            <div className="StorieTitle">{"&:hover, &:focus"}</div>
            <Button hover="hover"></Button>
          </div>
        </div>
        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">{'<Button variant="outline" />'}</div>
            <Button variant="outline" />
          </div>
          <div className="Storie">
            <div className="StorieTitle">{"&:hover, &:focus"}</div>
            <Button hover="hover" variant="outline" />
          </div>
        </div>

        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">{'<Button variant="text" />'}</div>
            <Button variant="text" />
          </div>
          <div className="Storie">
            <div className="StorieTitle">{'<Button variant="text" />'}</div>
            <Button hover="hover" variant="text" />
          </div>
        </div>

        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">{"<Button disableShadow/>"}</div>
            <Button color="primary" disableShadow />
          </div>
        </div>

        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">{"<Button disabled/>"}</div>
            <Button disabled />
          </div>

          <div className="Storie">
            <div className="StorieTitle">
              {'<Button variant="text" disabled/>'}
            </div>
            <Button disabled variant="text" />
          </div>
        </div>
        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">
              {"<Button startIcon=”local_grocery_store” />"}
            </div>
            <Button color="primary" startIcon="local_grocery_store" />
          </div>

          <div className="Storie">
            <div className="StorieTitle">
              {"<Button endIcon=”local_grocery_store” />"}
            </div>
            <Button color="primary" endIcon="local_grocery_store" />
          </div>
        </div>

        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">{'<Button size="sm" />'}</div>
            <Button color="primary" size="sm" />
          </div>

          <div className="Storie">
            <div className="StorieTitle">{'<Button size="md" />'}</div>
            <Button color="primary" size="md" />
          </div>

          <div className="Storie">
            <div className="StorieTitle">{'<Button size="lg" />'}</div>
            <Button color="primary" size="lg" />
          </div>
        </div>

        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">{'<Button color="default" />'}</div>
            <Button color="default" />
          </div>

          <div className="Storie">
            <div className="StorieTitle">{'<Button color="primary" />'}</div>
            <Button color="primary" />
          </div>

          <div className="Storie">
            <div className="StorieTitle">{'<Button color="secondary" />'}</div>
            <Button text="Secondary" color="secondary" />
          </div>

          <div className="Storie">
            <div className="StorieTitle">{'<Button color="danger" />'}</div>
            <Button text="Danger" color="danger" />
          </div>
        </div>

        <div className="StoriesRow">
          <div className="Storie">
            <div className="StorieTitle">{"&:hover, &:focus"}</div>
            <Button hover="hover" color="default" />
          </div>

          <div className="Storie">
            <div className="StorieTitle"></div>
            <Button hover="hover" color="primary" />
          </div>

          <div className="Storie">
            <div className="StorieTitle"></div>
            <Button hover="hover" text="Secondary" color="secondary" />
          </div>

          <div className="Storie">
            <div className="StorieTitle"></div>
            <Button hover="hover" text="Danger" color="danger" />
          </div>
        </div>
      </div>
      <div className="SubTitle">
        created by Arkadiusz Stępak - devChallenges.io
      </div>
    </div>
  );
}

export default App;
