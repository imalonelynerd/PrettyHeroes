<script setup>
import HeroContainer from '@/components/HeroContainer.vue'
import WidgetContainer from '@/components/containers/WidgetContainer.vue'
import TitleContainer from '@/components/containers/TitleContainer.vue'
import TitleWidget from '@/components/widgets/TitleWidget.vue'
import ItemContainer from '@/components/widgets/ItemContainer.vue'
import ItemElement from '@/components/elements/ItemElement.vue'
import MarkdownText from '@/components/widgets/MarkdownText.vue'
import MusicWidget from '@/components/widgets/MusicWidget.vue'
import FlagDisplayer from '@/components/widgets/FlagsDisplayer.vue'
import GridContainer from '@/components/widgets/GridContainer.vue'
import GridElement from '@/components/elements/GridElement.vue'
import PronounceButton from '@/components/special/PronounceButton.vue'
import HeroFooter from '@/components/containers/FooterContainer.vue'

const pronounsStub = ['They/them', 'awa']

const flagsStub = ['ace', 'nb', 'trans']

const descStub =
  '# Title 1\n' +
  '## Title 2\n' +
  '### Title 3\n' +
  '#### Title 4\n' +
  'This is a desc\n\n' +
  'Cybesec student, Hobbist graphical designer, on a C redemption arc\n\n' +
  'Working for **Blahaj Land**\n\n' +
  'I swear this is not a omg.lol clone...'
</script>

<template>
  <HeroContainer>
    <WidgetContainer background="#FFFFFFA0">
      <TitleWidget
        image="https://avatars.githubusercontent.com/u/42437280?v=4"
        firstName="Nerd"
        lastName="imalonelynerd"
        age="20"
        catchphrase="Binarity is for wonks"
        :pronouns="pronounsStub"
        font-color="#202020"
        title-color="#202020"
      />
    </WidgetContainer>
    <WidgetContainer background="#FFFFFFA0">
      <TitleContainer title="General information" font-color="#202020">
        <ItemContainer>
          <ItemElement font-color="#222" background="#FFF" icon-color="#222">
            <img src="/icons/work.png" />
            <p>Student</p>
          </ItemElement>
          <ItemElement font-color="#222" background="#FFF" icon-color="#222">
            <img src="/icons/location.png" />
            <p>Rouen, France</p>
          </ItemElement>
          <ItemElement font-color="#222" background="#FFF" icon-color="#222">
            <img src="/icons/timezone.png" />
            <p>UTC +1</p>
          </ItemElement>
          <ItemElement font-color="#222" background="#FFF" icon-color="#222">
            <img src="/icons/status.png" />
            <p>On my island</p>
          </ItemElement>
        </ItemContainer>
      </TitleContainer>
      <TitleContainer title="Terms" font-color="#202020">
        <FlagDisplayer
          :flags="flagsStub"
          font-color="#202020"
          background="#FFFFFF"
          pronouns-link="https://pronouns.page/@imalonelynerd"
        />
      </TitleContainer>
    </WidgetContainer>
    <WidgetContainer background="#FFFFFFA0">
      <TitleContainer title="About me" font-color="#202020">
        <MarkdownText :text="descStub" font-color="#202020" />
      </TitleContainer>
    </WidgetContainer>
    <WidgetContainer background="#FFFFFFA0">
      <TitleContainer title="Favourite music" font-color="#202020">
        <MusicWidget
          font-color="#202020"
          yt-url="https://www.youtube.com/watch?v=793v_G9An70"
        />
      </TitleContainer>
      <TitleContainer title="Favourite video" font-color="#202020">
        <MusicWidget
          font-color="#202020"
          yt-url="https://www.youtube.com/watch?v=Ss6vLmLcCbU"
        />
      </TitleContainer>
    </WidgetContainer>
    <WidgetContainer background="#FFFFFFA0">
      <TitleContainer title="Links" font-color="#202020">
        <GridContainer>
          <GridElement font-color="#222" background="#FFF" icon-color="#222" :is-clickable="true">
            <img src="/icons/link.png" alt="Link" />
            <p>Mastodon</p>
          </GridElement>
          <GridElement font-color="#222" background="#FFF" icon-color="#222" :is-clickable="true">
            <img src="/icons/link.png" alt="Link" />
            <p>Mastodon</p>
          </GridElement>
          <GridElement font-color="#222" background="#FFF" icon-color="#222" :is-clickable="true">
            <img src="/icons/link.png" alt="Link" />
            <p>Mastodon</p>
          </GridElement>
          <GridElement font-color="#222" background="#FFF" icon-color="#222" :is-clickable="true">
            <img src="/icons/link.png" alt="Link" />
            <p>Mastodon</p>
          </GridElement>
          <GridElement font-color="#222" background="#FFF" icon-color="#222" :is-clickable="true">
            <img src="/icons/link.png" alt="Link" />
            <p>Mastodon</p>
          </GridElement>
          <GridElement font-color="#222" background="#FFF" icon-color="#222" :is-clickable="true">
            <img src="/icons/link.png" alt="Link" />
            <p>Mastodon</p>
          </GridElement>
        </GridContainer>
      </TitleContainer>
    </WidgetContainer>
    <WidgetContainer background="#FFFFFFA0">
      <TitleContainer title="Extras" font-color="#202020">
        <ItemContainer>
          <PronounceButton />
          <ItemElement font-color="#222" background="#FFF" icon-color="#222" :is-clickable="true">
            <img src="/icons/share.png" alt="Share" />
            <p>Share</p>
          </ItemElement>
          <ItemElement font-color="#222" background="#FFF" icon-color="#222" :is-clickable="true">
            <img src="/icons/file.png" alt="Source" />
            <p>See source file</p>
          </ItemElement>
          <ItemElement font-color="#222" background="#FFF" icon-color="#222" :is-clickable="true">
            <img src="/icons/file.png" alt="Snapshot" />
            <p>Get snapshot</p>
          </ItemElement>
        </ItemContainer>
      </TitleContainer>
    </WidgetContainer>
    <HeroFooter background="#FFFFFFA0" font-color="#222">
      <p>
        Made with ❤️, ☄️ and 🦕 using
        <a href="https://github.com/imalonelynerd/PrettyHeroes">PrettyHeroes</a>
      </p>
    </HeroFooter>
  </HeroContainer>
</template>
