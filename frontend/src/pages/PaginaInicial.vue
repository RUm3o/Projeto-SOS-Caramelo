<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://blog-static.petlove.com.br/wp-content/uploads/2021/10/cachorro-abandonado-petlove.jpg" >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Adote um Amigo</div>
          <div class="text-subtitle1">Texto test 123</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://img.freepik.com/fotos-gratis/cao-vadio-local-turco-com-olhos-tristes-olhando-para-a-camera-na-rua_1268-20131.jpg" >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Adote um Amigo</div>
          <div class="text-subtitle1">Texto test 123</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://www.uema.br/wp-content/uploads/2022/05/Cachorro-e-abandonado-no-Centro-de-Londrina0316451501202202102029.webp" >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Adote um Amigo</div>
          <div class="text-subtitle1">Texto test 123</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="https://www.adotepetz.com.br/blog/wp-content/uploads/2021/08/cachorro-abandonado2-1.jpg" >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Adote um Amigo</div>
          <div class="text-subtitle1">Texto test 123</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <!--- CARD CHAMADOS -->
  <div class="row" >
      <div class="q-col-lg-4 q-col-md-4 q-col-sm-6 q-col-12"
          v-for="item in listaDeItens"
          :key="item.id" >
        <q-card class="my-card" flat bordered >
      <q-img
      :src="item.imagemChamado" class="imagem-card"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Tipo de Animal:  <b>{{ item.tipoAnimal }}</b></div>
        <div class="text-h5 q-mt-sm q-mb-xs">Tipo de Ajuda: <b>{{ item.tipoChamado }}</b></div>
        <div class="text-caption text-grey">
          Este Chamado foi feito apartir desta daqui! <br>
          <b>Descrição :</b> {{ item.descricao }} <br>
          <b>Endereço :</b> {{ item.enderecoChamado }}
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn
                flat
                color="primary"
                label="Obter Rota"
                @click="obterRota(item.latitudeChamado, item.longitudeChamado)"
              />
              <q-btn flat color="secondary" label="Registrar Resgate!" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { api } from 'boot/axios'

export default {
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true),
      listaDeItens: [],
      expanded: ref(false)
    }
  },
  mounted () {
    this.obterDadosDaAPI()
  },
  methods: {
    async obterDadosDaAPI () {
      try {
        // Faça uma solicitação GET com o Axios para obter dados da API
        const response = await api.get('chamados/listar-todos')
        // Atribua os dados à listaDeItens
        this.listaDeItens = response.data
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error)
      }
    },
    obterRota (latitude, longitude) {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
.my-card
  width: 100%
  max-width: 350px

</style>

<style>
.imagem-card {
  max-width: 100%;
  max-height: 200px; /* Ajuste o valor máximo desejado */
}
</style>
