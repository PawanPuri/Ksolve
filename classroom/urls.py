# urls.py (classroom app)

from rest_framework.routers import DefaultRouter
from .views import ClassViewSet, UnitViewSet, SessionViewSet, LectureViewSet, CommentViewSet

router = DefaultRouter()
router.register(r'classes', ClassViewSet)
router.register(r'units', UnitViewSet)
router.register(r'sessions', SessionViewSet)
router.register(r'lectures', LectureViewSet)
router.register(r'comments', CommentViewSet)

urlpatterns = router.urls
