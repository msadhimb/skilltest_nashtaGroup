/* eslint-disable react/prop-types */
import { Button, Label, Modal, TextInput } from "flowbite-react";

const Modals = ({
  setOpenModal,
  openModal,
  title,
  handleChange,
  handleSubmit,
  form,
}) => {
  return (
    <>
      {openModal && (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>{title}</Modal.Header>
          <form onSubmit={handleSubmit}>
            <Modal.Body>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nama" value="Nama" />
                </div>
                <TextInput
                  id="nama"
                  type="text"
                  name="nama"
                  required
                  onChange={handleChange}
                  value={form?.nama}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nim" value="NIM" />
                </div>
                <TextInput
                  id="nim"
                  type="text"
                  name="nim"
                  required
                  onChange={handleChange}
                  value={form?.nim}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="jurusan" value="Jurusan" />
                </div>
                <TextInput
                  id="jurusan"
                  type="text"
                  name="jurusan"
                  required
                  onChange={handleChange}
                  value={form?.jurusan}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="ipk" value="IPK" />
                </div>
                <TextInput
                  id="ipk"
                  type="number"
                  step="any"
                  name="ipk"
                  required
                  onChange={handleChange}
                  value={form?.ipk}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit">Save</Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Decline
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      )}
    </>
  );
};

export default Modals;
