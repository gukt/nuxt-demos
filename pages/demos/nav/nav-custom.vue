<template>
  <nav>
    <ContentNavigation>
      <template v-slot:default="{ navigation }">
        <ul>
          <AppNavItem v-for="link in navigation" :key="link.id" :item="link" />
        </ul>
      </template>
    </ContentNavigation>
  </nav>
</template>