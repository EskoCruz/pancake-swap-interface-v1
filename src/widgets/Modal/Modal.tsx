import React from "react";
import Heading from "../../components/Heading/Heading";
import { ModalBody, ModalHeader, ModalTitle, ModalContainer, ModalCloseButton, ModalBackButton } from "./styles";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px",
  minWidth = "320px",
  ...props
}) => (
  <ModalContainer minWidth={minWidth} {...props}>
    <ModalHeader>
      <ModalTitle>
        {onBack && <ModalBackButton onBack={onBack} />}
        <Heading>{title}</Heading>
      </ModalTitle>
      {!hideCloseButton && <ModalCloseButton onDismiss={onDismiss} />}
    </ModalHeader>
    <ModalBody p={bodyPadding}>{children}</ModalBody>
  </ModalContainer>
);

export default Modal;
