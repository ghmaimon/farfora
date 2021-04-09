from django.urls import path,include
from .views import PostViewSet,UserViewSet,TagViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('posts',PostViewSet)
router.register('users',UserViewSet)
router.register('tags',TagViewSet)

urlpatterns = [
    path('',include(router.urls))
]
