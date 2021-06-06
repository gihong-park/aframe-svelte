<script>
  let entity;

  function addGltf() {
    entity = document.querySelector("#add");
    let gltf = document.createElement("a-entity");
    gltf.setAttribute("gltf-model", "#balloon");
    gltf.setAttribute("position", "0 2 1");
    gltf.setAttribute("dynamic-body", "shape:box");
    entity.appendChild(gltf);
  }

  window.addEventListener("click", addGltf);
</script>

<a-camera position="0 1.6 10" />
<a-entity id="add" />
{#each Array(100) as _, i}
  <a-entity
    dynamic-body="shape:box"
    geometry="primitive: box"
    width="1"
    height="1"
    depth="1"
    position="0 2 0"
    gltf-model="#balloon"
    material="color: black"
  />
{/each}
<a-box
  dynamic-body="shape:box"
  width="1"
  height="1"
  depth="1"
  color="red"
  position="0 0 0"
/>
<a-plane
  static-body="shape:box"
  width="10"
  height="10"
  color="green"
  rotation="-90 0 0"
  depth="0.1"
  position="0 -4 0"
/>
