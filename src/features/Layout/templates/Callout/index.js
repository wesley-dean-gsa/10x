import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Col, Row } from "components/Grid";
import Icon from "components/Icon";
import Button from "components/Button";

const Callout = ({ className, title, subtitle, text, items, button }) => {
  return (
    <div
      className={classnames({
        TxContent__callout: true,
        [className]: Boolean(className),
      })}
    >
      {title && <h2>{title}</h2>}
      {text && <div className="margin-bottom-4">{text}</div>}
      {subtitle && <h3>{subtitle}</h3>}
      {items && (
        <Row>
          {items.map((item, i) => (
            <Col key={`txCallout-${i}`} size="12" desktop="auto">
              <div className="display-flex margin-right-2">
                <Icon icon="check" className="margin-right-2" />
                <div>
                  <h4>{item.title}</h4>
                  <span>{item.text}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
      {button.text && button.link && (
        <div className="text-center margin-y-4">
          <Button variant="outline" url={button.link}>
            {button.text}
          </Button>
        </div>
      )}
    </div>
  );
};

Callout.defaultProps = {
  button: {},
  items: [],
};

Callout.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  text: PropTypes.node,
  button: PropTypes.object,
  items: PropTypes.array,
};

export default Callout;
