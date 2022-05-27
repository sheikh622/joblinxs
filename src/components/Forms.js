import React, { useState } from "react";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
} from "@themesberg/react-bootstrap";

export const GeneralInfoForm = () => {

  return (
    <Card className="bg-white shadow-sm mb-4 border-0">
      <Card.Body>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="jobName">
                <Form.Label>Job Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your Job name"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="jobNature">
                <Form.Label>Job Nature</Form.Label>
                <fieldset className="d-flex radioButton">
                  <Form.Check
                    defaultChecked
                    type="radio"
                    defaultValue="oneTime"
                    label="One Time"
                    name="jobNature"
                    className="radio1"
                  />

                  <Form.Check
                    type="radio"
                    defaultValue="recurring"
                    label="Recurring"
                    name="jobNature"
                  />
                </fieldset>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="providersRequired">
                <Form.Label>Number of Providers required</Form.Label>
                <Form.Select defaultValue="1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="jobRequirements">
                <Form.Label>Job Requirements</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Job Requirements..."
                />
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group id="toolsNeeded">
                <Form.Label>Tools Needed</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Tools needed..."
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
          <Col md={3} className="mb-3">
              <Form.Group id="jobNature">
                <Form.Label>Payment Type</Form.Label>
                <fieldset className="d-flex radioButton">
                  <Form.Check
                    defaultChecked
                    type="radio"
                    defaultValue="hourly"
                    label="Hourly"
                    name="paymentType"
                    className="radio1"
                  />

                  <Form.Check
                    type="radio"
                    defaultValue="fixed"
                    label="Fixed"
                    name="paymentType"
                  />
                </fieldset>
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="jobType">
                <Form.Label>Job Type</Form.Label>
                <fieldset className="d-flex radioButton">
                  <Form.Check
                    defaultChecked
                    type="radio"
                    defaultValue="partTime"
                    label="Part-time"
                    name="jobType"
                    className="radio1"
                  />

                  <Form.Check
                    type="radio"
                    defaultValue="permanent"
                    label="Permanent"
                    name="jobType"
                  />
                </fieldset>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="fixedRate">
                <Form.Label>Fixed Rate</Form.Label>
                <Form.Control required type="number" placeholder="$" />
              </Form.Group>
            </Col>
          </Row>

          <h5 className="my-4">Time Required</h5>

          <Row>
            <Col md={3} className="mb-3">
              <Form.Group id="hours">
                <Form.Label>Hours</Form.Label>
                <Form.Select defaultValue="1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="minutes">
                <Form.Label>Minutes</Form.Label>
                <Form.Select defaultValue="1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                  <option value="45">45</option>
                  <option value="46">46</option>
                  <option value="47">47</option>
                  <option value="48">48</option>
                  <option value="49">49</option>
                  <option value="50">50</option>
                  <option value="51">51</option>
                  <option value="52">52</option>
                  <option value="53">53</option>
                  <option value="54">54</option>
                  <option value="55">55</option>
                  <option value="56">56</option>
                  <option value="57">57</option>
                  <option value="58">58</option>
                  <option value="59">59</option>
                  <option value="60">60</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="experienceRequired">
                <Form.Label>Minimum Experience Required</Form.Label>
                <Form.Select defaultValue="professional">
                  <option value="none">None</option>
                  <option value="professional">Professional</option>
                  <option value="expert">Expert</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="align-items-end">
            <Col md={6} className="mb-3">
              <Form.Group id="categories">
                <Form.Label>Categories</Form.Label>
                <Form.Select defaultValue="plumber">
                  <option value="plumber">Plumber</option>
                  <option value="teacher">Teacher</option>
                  <option value="carpenter">Carpenter</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Button variant="primary" type="button" className="w-100">
                Add Location
              </Button>
            </Col>
          </Row>

          <div className="mt-3 d-flex justify-content-end">
            <Button variant="primary" type="submit">
             Post Job
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
{
  /* <Row>
 <Col sm={4} className="mb-3">
  <Form.Group className="mb-2">
    <Form.Label>Select state</Form.Label>
    <Form.Select id="state" defaultValue="0">
      <option value="0">State</option>
      <option value="AL">Alabama</option>
      <option value="AK">Alaska</option>
      <option value="AZ">Arizona</option>
      <option value="AR">Arkansas</option>
      <option value="CA">California</option>
      <option value="CO">Colorado</option>
      <option value="CT">Connecticut</option>
      <option value="DE">Delaware</option>
      <option value="DC">District Of Columbia</option>
      <option value="FL">Florida</option>
      <option value="GA">Georgia</option>
      <option value="HI">Hawaii</option>
      <option value="ID">Idaho</option>
      <option value="IL">Illinois</option>
      <option value="IN">Indiana</option>
      <option value="IA">Iowa</option>
      <option value="KS">Kansas</option>
      <option value="KY">Kentucky</option>
      <option value="LA">Louisiana</option>
      <option value="ME">Maine</option>
      <option value="MD">Maryland</option>
      <option value="MA">Massachusetts</option>
      <option value="MI">Michigan</option>
      <option value="MN">Minnesota</option>
      <option value="MS">Mississippi</option>
      <option value="MO">Missouri</option>
      <option value="MT">Montana</option>
      <option value="NE">Nebraska</option>
      <option value="NV">Nevada</option>
      <option value="NH">New Hampshire</option>
      <option value="NJ">New Jersey</option>
      <option value="NM">New Mexico</option>
      <option value="NY">New York</option>
      <option value="NC">North Carolina</option>
      <option value="ND">North Dakota</option>
      <option value="OH">Ohio</option>
      <option value="OK">Oklahoma</option>
      <option value="OR">Oregon</option>
      <option value="PA">Pennsylvania</option>
      <option value="RI">Rhode Island</option>
      <option value="SC">South Carolina</option>
      <option value="SD">South Dakota</option>
      <option value="TN">Tennessee</option>
      <option value="TX">Texas</option>
      <option value="UT">Utah</option>
      <option value="VT">Vermont</option>
      <option value="VA">Virginia</option>
      <option value="WA">Washington</option>
      <option value="WV">West Virginia</option>
      <option value="WI">Wisconsin</option>
      <option value="WY">Wyoming</option>
    </Form.Select>
  </Form.Group>
</Col> 
</Row> */
}
