import React, { useState } from "react";
import { Badge, Button, Modal } from "antd";
type modalPopupProp = {
  title: string;
  description: string[];
  link?: string;
};

const ModalPopUp: React.FC<modalPopupProp> = ({ title, description, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Read more
      </Button>
      {link && (
        <Button type="link" href={link} target="_blank">
          link
        </Button>
      )}

      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {description.map((des) => (
          <Badge color="var(--primary)" text={des} />
        ))}
      </Modal>
    </>
  );
};

export default ModalPopUp;
