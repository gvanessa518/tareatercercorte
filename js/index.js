
    let vehicleData = JSON.parse(localStorage.getItem("vehicleData") || "[]"); //aqui se cargan los datos almacenados en localStorage al inicio de la página

    function submitData() {
      const vehicleOwner = document.getElementById("vehicleOwner").value;
      const phone = document.getElementById("phone").value;
      const address = document.getElementById("address").value;
      const vehicleMake = document.getElementById("vehicleMake").value;
      const vehicleModel = document.getElementById("vehicleModel").value;
      const maintenanceType = document.getElementById("maintenanceType").value;
      const maintenanceDate = document.getElementById("maintenanceDate").value;

      if (!vehicleOwner || !phone || !address || !vehicleMake || !vehicleModel || !maintenanceType || !maintenanceDate) { //se validan que los campos esten llenos
        alert("No se pueden hacer registros con campos vacios, complete toda la información");
        return;
      }

      const vehicleInfo = { //se crea un objeto con la info del carro
        owner: vehicleOwner,
        phone: phone,
        address: address,
        make: vehicleMake,
        model: vehicleModel,
        maintenanceType: maintenanceType,
        maintenanceDate: maintenanceDate,
      };

      vehicleData.push(vehicleInfo); //se agrega el objeto a la matriz simulando la base de datos

      localStorage.setItem("vehicleData", JSON.stringify(vehicleData)); // se guardan los datos en localStorage

      clearFields(); //se limpian los campos después de guardar la información

      updateTable(); //mostramos los registros en la tabla

    }

    function clearFields() {
      document.getElementById("vehicleOwner").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("address").value = "";
      document.getElementById("vehicleMake").value = "";
      document.getElementById("vehicleModel").value = "";
      document.getElementById("maintenanceType").value = "preventivo";
      document.getElementById("maintenanceDate").value = "";
    }

    function updateTable() {
      const tableBody = document.getElementById("vehicleTableBody");
      tableBody.innerHTML = "";

      for (const vehicle of vehicleData) {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${vehicle.owner}</td>
          <td>${vehicle.phone}</td>
          <td>${vehicle.address}</td>
          <td>${vehicle.make}</td>
          <td>${vehicle.model}</td>
          <td>${vehicle.maintenanceType}</td>
          <td>${vehicle.maintenanceDate}</td>
        `;
        tableBody.appendChild(row);
      }
    }

    // Mostrar los registros al cargar la página inicialmente
    updateTable();
